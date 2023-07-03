import fs from 'fs';
import { UserMaterialDetail } from '@/models/user-material-detail.model';
import { Request, Response } from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { File } from '@/models/file.model';

export const getFile = async (req: Request, res: Response) => {
  if (!req.query.user_material_detail_id)
    throw Error('Хэрэглэгчийн материалын дэлгэрэнгүй дугаар оруулна уу');
  const userMaterialDetailId = req.query.user_material_detail_id as string;
  const userMaterialDetail = await UserMaterialDetail.findByPk(
    userMaterialDetailId,
  );
  if (!userMaterialDetail)
    throw Error('Хэрэглэгчийн материалын дэлгэрэнгүй олдсонгүй');

  const savedFile = await File.findByPk(userMaterialDetail?.source_id);
  if (!savedFile) throw Error('Оруулсан файл байхгүй байна.');
  const filePath = path.join(__dirname, '../../uploads', savedFile.file_name);

  return res.sendFile(filePath);
};

export const createFile = async (req: Request, res: Response) => {
  if (!req.body.user_material_detail_id)
    throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');
  const userMaterialDetailId = req.body.user_material_detail_id;

  let userMaterialDetail = await UserMaterialDetail.findOne({
    where: { user_material_detail_id: userMaterialDetailId },
  });
  if (!userMaterialDetail) throw Error('Хэрэглэгчийн материал олдсонгүй');

  // umnu ni bsan file-iig ustgah
  if (userMaterialDetail.source_id) {
    const oldFIle = await File.findByPk(userMaterialDetail.source_id);
    if (oldFIle) {
      const oldFilePath = path.join(
        __dirname,
        '../../uploads',
        oldFIle.file_name,
      );

      fs.unlink(oldFilePath, function (err) {
        if (err) console.error(err);
      });

      await File.destroy({
        where: { file_id: oldFIle.file_id },
        force: true,
      });
    }
  }
  const reqFile = req.file;
  if (!reqFile) throw Error('Файл аа оруулна уу');

  const file = {
    file_id: uuidv4(),
    file_path: reqFile.path,
    original_name: reqFile.originalname,
    mime_type: reqFile.mimetype,
    destination: reqFile.destination,
    file_name: reqFile.filename,
    size: reqFile.size,
  };

  const savedFile = await File.create(file);
  userMaterialDetail = await (userMaterialDetail as UserMaterialDetail).update({
    source_id: file.file_id,
  });

  return res.send({ userMaterialDetail });
};

export const delFile = async (req: Request, res: Response) => {
  if (!req.body.user_material_detail_id)
    throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');

  const userMaterialDetailId = req.query.user_material_detail_id as string;

  let userMaterialDetail = await UserMaterialDetail.findOne({
    where: { user_material_detail_id: userMaterialDetailId },
  });
  if (!userMaterialDetail) throw Error('Хэрэглэгчийн материал олдсонгүй');

  if (userMaterialDetail.source_id) {
    const oldFIle = await File.findByPk(userMaterialDetail.source_id);
    if (oldFIle) {
      const oldFilePath = path.join(
        __dirname,
        '../../uploads',
        oldFIle.file_name,
      );

      fs.unlink(oldFilePath, function (err) {
        if (err) console.error(err);
      });

      await File.destroy({
        where: { file_id: oldFIle.file_id },
        force: true,
      });
    }
  }

  return res.send({ message: 'Амжилттай устгалаа' });
};
