import { QueryResolvers } from '@/graphql';
import { MaterialDetail } from '@/models/material-detail.model';
import { ResolverContext } from '..';
import { messages } from '@/utils/messages';

export const GetMaterialDetail: QueryResolvers<ResolverContext>['GetMaterialDetail'] =
  async (_, { material_detail_id }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);
    const savedMaterial = await MaterialDetail.findByPk(material_detail_id);

    return savedMaterial;
  };

export const ListMaterialDetailPage: QueryResolvers<ResolverContext>['ListMaterialDetailPage'] =
  async (_, { page, limit, advanced }, { token }) => {
    const condition = { ...advanced };
    // if (!token) throw Error(messages.unauthorized);

    if (!advanced.material_id) throw Error('Визний төрлийн дугаар оруулна уу');

    const listMaterialDetail = await MaterialDetail.findAndCountAll({
      where: condition,
      limit: limit,
      offset: page,
    });

    return {
      listMaterial: listMaterialDetail,
      totalPages: Math.ceil(listMaterialDetail.count / limit),
      totalItems: listMaterialDetail.count,
    };
  };

export const ListMaterialDetails: QueryResolvers<ResolverContext>['ListMaterialDetails'] =
  async (_, { advanced }, { token }) => {
    const condition = { ...advanced };
    // if (!token) throw Error(messages.unauthorized);
    if (!advanced.material_id) throw Error('Визний төрлийн дугаар оруулна уу');

    const listMaterial = await MaterialDetail.findAll({
      where: condition,
    });

    return listMaterial;
  };
