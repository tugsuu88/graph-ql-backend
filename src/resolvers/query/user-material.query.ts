import { QueryResolvers } from '@/graphql';
import { UserMaterial } from '@/models/user-material.model';
import { ResolverContext } from '..';
import { messages } from '@/utils/messages';
import { User } from '@/models/User.model';
import { UserMaterialDetail } from '@/models/user-material-detail.model';

export const GetUserMaterial: QueryResolvers<ResolverContext>['GetUserMaterial'] =
  async (_, { user_material_id }, { token }) => {
    if (!token) throw Error(messages.unauthorized);

    if (!user_material_id)
      throw Error('Хэрэглэгчийн материалын дугаар оруулна уу');

    const userMaterial = await UserMaterial.findByPk(user_material_id);
    const listUserMaterialDetail = await UserMaterialDetail.findAll({
      where: { user_detail_id: userMaterial?.user_material_id },
    });
    // const listUserMaterialDetail = await UserMaterialDetail.findAll(
    //   `select
    //   A.material_detail_id,
    //   A.material_id,
    //   A.material_name,
    //   A.material_descr,
    //   A.material_type,
    //   A.material_source_id,
    //   A.cond_yn,
    //   A.cond_descr,
    //   B.source_type,
    //   B.source_id,
    //   C.file_id,
    //   C.file_path,
    //   C.org_file,
    //   C.file_extention,
    //   C.file_size,
    //   C.alt_text,
    //   C.field_name
    // from tb_material_detail A
    //   left join tb_user_material_detail B
    //     on A.material_detail_id  = B.material_detail_id
    //   left join tb_file C
    //     on B.source_id = C.file_id
    // where B.user_material_id  = '2566c1fb-9040-4b4e-9ecc-da5197711cb6' AND A.use_yn = 'Y' and A.del_yn = 'N'`,
    //   {
    //     mapToModel: true,
    //     model: User,
    //   },
    // );

    return {
      userMaterial: userMaterial,
      listUserMaterialDetail: listUserMaterialDetail,
    };
  };

// export const ListUserMaterialsPage: QueryResolvers<ResolverContext>['ListUserMaterialsPage'] =
//   async (_, { page, limit, advanced }, { token }) => {
//     let condition = { ...advanced };

//     const listUserMaterial = await UserMaterial.findAndCountAll({
//       where: condition,
//       limit: limit,
//       offset: page,
//     });

//     return {
//       listUserMaterial: listUserMaterial.rows,
//       totalItems: Math.ceil(listUserMaterial.count / limit),
//       totalPages: listUserMaterial.count,
//     };
//   };

export const ListUserMaterials: QueryResolvers<ResolverContext>['ListUserMaterials'] =
  async (_, { advanced }, { token }) => {
    if (!token) throw Error(messages.unauthorized);

    let condition = { ...advanced, user_id: (token?.user as User).user_id };
    return await UserMaterial.findAll({ where: condition });
  };
