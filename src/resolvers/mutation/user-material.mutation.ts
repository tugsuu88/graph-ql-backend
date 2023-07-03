import { MutationResolvers, UserMaterialDetailDenyInput } from '@/graphql';
import { UserMaterial } from '@/models/user-material.model';
import { ResolverContext } from '..';
import { v4 as uuidv4 } from 'uuid';
import { messages } from '@/utils/messages';
import { Op } from 'sequelize';
import { User } from '@/models/User.model';
import { Material } from '@/models/material.model';
import { UserMaterialDetail } from '@/models/user-material-detail.model';
import { MaterialDetail } from '@/models/material-detail.model';
import { Manager } from '@/models/manager.model';
import { ApprovedMaterial } from '@/models/approved-material.model';
import { Comment } from '@/models/comment.model';
import { CommentDetail } from '@/models/comment-detail.model';

export const CreateUserMaterial: MutationResolvers<ResolverContext>['CreateUserMaterial'] =
  async (_, { user_material }, { token }) => {
    if (!user_material)
      throw Error('Хэрэглэгчийн материалын мэдээлэл оруулах шаардлагатай');

    if (!token) throw Error(messages.unauthorized);

    const user_id = (token?.user as User).user_id;

    // umnu ni material uusgesen eseh?
    const listUserMaterials = await UserMaterial.findAll({
      where: {
        user_id: user_id,
        use_yn: 'Y',
        del_yn: 'N',
        status: { [Op.notIn]: ['COMPLETED'] },
      },
    });

    if (listUserMaterials.length > 0)
      throw Error('Өмнө нь шийдэгдээгүй материал үүсгэсэн байна.');

    // insert mode
    const item = {
      ...user_material,
      user_material_id: uuidv4(),
      user_id: user_id,
      status: 'CREATED',
    };
    return await UserMaterial.create(item);
  };

export const SetMaterialId: MutationResolvers<ResolverContext>['SetMaterialId'] =
  async (_, { user_material_id, material_id }, { token }) => {
    if (!token) throw Error(messages.unauthorized);
    const user_id = (token?.user as User).user_id;

    if (!user_material_id)
      throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');

    if (!material_id) throw Error('Визний төрлийн дугаар оруулна уу');

    let savedUserMaterial = await UserMaterial.findByPk(user_material_id);
    if (!savedUserMaterial) throw Error('Хэрэглэгчийн материал олдсонгүй');

    let material = await Material.findByPk(material_id);
    if (!material) throw Error('Визний төрөл олдсонгүй');

    // visa-nii turuld material id nemeh
    savedUserMaterial = await (savedUserMaterial as UserMaterial).update({
      material_id: material_id,
    });

    // huuchin hereglegchin delgerengui material-iig ustgah
    await UserMaterialDetail.destroy({
      where: { user_material_id: user_material_id },
      force: true,
    });

    // shine material-iin delgerengui oruulah
    const listMaterialDetail = await MaterialDetail.findAll({
      where: { material_id: material_id },
    });

    for (var item of listMaterialDetail) {
      const userMaterialDetail = {
        user_material_detail_id: uuidv4(),
        user_material_id: user_material_id,
        material_id: material_id,
        material_detail_id: item.material_detail_id,
        source_type: item.material_type,
        souce_id: item.material_source_id,
        user_id: user_id,
      };

      await UserMaterialDetail.create(userMaterialDetail);
    }

    return savedUserMaterial;
  };

export const ChangeCreateToCheck: MutationResolvers<ResolverContext>['ChangeCreateToCheck'] =
  async (_, { user_material_id }, { token }) => {
    if (!token) throw Error(messages.unauthorized);
    const user_id = (token?.user as User).user_id;

    const user = await User.findByPk(user_id);
    if (!user) throw Error('Хэрэглэгчийн мэдээлэл олдсонгүй');

    if (!user_material_id)
      throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');

    const savedUserMaterial = await UserMaterial.findOne({
      where: { user_material_id: user_material_id, user_id: user_id },
    });

    if (!savedUserMaterial) throw Error('Хэрэглэгчийн материал олдсонгүй');

    const listDetails = await UserMaterialDetail.findAll({
      where: { user_material_id: user_material_id, user_id: user_id },
    });

    if (!listDetails || listDetails.length <= 0)
      throw Error('Хэрэглэгчийн бүрдүүлэх материалууд олдсонгүй.');

    // for (const item in listDetails) {
    //   if (!item.source_id) throw Error('Бүх материалыг оруулах шаардлагатай.');
    // }

    if (!user.pass_num)
      throw Error('Хэрэглэгчийн гадаад пасспорт дугаар тохируулна уу');

    // if (user.phone_verified_yn !== 'Y')
    //   throw Error('Утасны дугаар баталгаажуулах шаардлагатай');

    // if (user.email_verified_yn !== 'Y')
    //   throw Error('Имэйл хаяг баталгаажуулах шаардлагатай');

    return await (savedUserMaterial as UserMaterial).update({
      status: 'CHECK',
    });
  };

export const CancelUserMaterial: MutationResolvers<ResolverContext>['CancelUserMaterial'] =
  async (_, { user_material_id }, { token }) => {
    if (!token) throw Error(messages.unauthorized);
    const user_id = (token?.user as User).user_id;

    const user = await User.findByPk(user_id);
    if (!user) throw Error('Хэрэглэгчийн мэдээлэл олдсонгүй');

    if (!user_material_id)
      throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');

    const savedUserMaterial = await UserMaterial.findOne({
      where: { user_material_id: user_material_id, user_id: user_id },
    });

    if (!savedUserMaterial) throw Error('Хэрэглэгчийн материал олдсонгүй');

    return await (savedUserMaterial as UserMaterial).update({
      status: 'CANCEL',
    });
  };

export const ChangeCheckToApprove: MutationResolvers<ResolverContext>['ChangeCheckToApprove'] =
  async (_, { user_material_id, manager_descr }, { token }) => {
    if (!token) throw Error(messages.unauthorized);
    const manager_id = (token?.user as User).user_id;

    const manager = await Manager.findByPk(manager_id);
    if (!manager) throw Error('Байцаагчын мэдээлэл олдсонгүй.');

    if (!user_material_id) throw Error('Материалын дугаар оруулна уу');
    const userMaterial = await UserMaterial.findByPk(user_material_id);

    if (!userMaterial) throw Error('Хэрэглэгчийн мэдээлэл олдсонгүй');

    // Хэрэглэгч байцаагч дээр ирж уулзах цаг ийг олох. Эхний байдлаар одоогын цагаар орууллаа.
    const goalDate = new Date();

    const approvedMaterial = await ApprovedMaterial.create({
      approved_material_id: uuidv4(),
      user_material_id: userMaterial.user_material_id,
      user_id: userMaterial.user_id,
      manager_id: manager_id,
      approve_date: new Date(),
      goal_date: goalDate,
      manager_descr: manager_descr,
    });

    await (userMaterial as UserMaterial).update({ status: 'APPROVED' });
    return approvedMaterial;
  };

export const ChangeCheckToDeny: MutationResolvers<ResolverContext>['ChangeCheckToDeny'] =
  async (_, { paramUserMaterial, paramUserMaterialDetail }, { token }) => {
    if (!token) throw Error(messages.unauthorized);
    const manager_id = (token?.user as User).user_id;

    const manager = await Manager.findByPk(manager_id);
    if (!manager) throw Error('Байцаагчын мэдээлэл олдсонгүй.');

    if (!paramUserMaterial?.user_material_id)
      throw Error('Материалын дугаар оруулна уу');

    const userMaterial = await UserMaterial.findByPk(
      paramUserMaterial?.user_material_id,
    );

    const comment_id = uuidv4();

    await Comment.create({
      comment_id: comment_id,
      user_material_id: paramUserMaterial?.user_material_id,
      manager_id: manager_id,
      descr: paramUserMaterial.deny_descr,
    });

    for (let item in paramUserMaterialDetail) {
      const detail = item as UserMaterialDetailDenyInput;

      await CommentDetail.create({
        comment_detail_id: uuidv4(),
        comment_id: comment_id,
        manager_id: manager_id,
        user_material_detail_id: detail.user_material_detail_id,
        descr: detail.deny_descr,
      });
    }

    return await (userMaterial as UserMaterial).update({
      status: 'DENY',
      last_comment_id: comment_id,
    });
  };

// export const ChangeDenyToCheck: MutationResolvers<ResolverContext>['ChangeCheckToDeny'] =
//   async (_, { paramUserMaterial, paramUserMaterialDetail }, { token }) => {
//     if (!token) throw Error(messages.unauthorized);
//     const user_id = (token?.user as User).user_id;

//     const user = await Manager.findByPk(user_id);
//     if (!user) throw Error('Байцаагчын мэдээлэл олдсонгүй.');

//   };

export const ChangeApproveToDone: MutationResolvers<ResolverContext>['ChangeApproveToDone'] =
  async (_, { user_material_id }, { token }) => {
    if (!token) throw Error(messages.unauthorized);
    const manager_id = (token?.user as User).user_id;

    const manager = await Manager.findByPk(manager_id);
    if (!manager) throw Error('Байцаагчын мэдээлэл олдсонгүй.');

    if (!user_material_id)
      throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');

    const userMaterial = await UserMaterial.findByPk(user_material_id);
    const approvedMaterial = await ApprovedMaterial.findOne({
      where: { user_material_id: user_material_id },
    });
    if (!approvedMaterial) throw Error('Материал нь шалгагдаагүй байна.');

    await (approvedMaterial as ApprovedMaterial).update({
      arrived_yn: 'Y',
      arrived_date: new Date(),
    });
    return await (userMaterial as UserMaterial).update({ status: 'DONE' });
  };
