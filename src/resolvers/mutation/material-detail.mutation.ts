import { MutationResolvers } from '@/graphql';
import { MaterialDetail } from '@/models/material-detail.model';
import { ResolverContext } from '..';
import { v4 as uuidv4 } from 'uuid';
import { messages } from '@/utils/messages';

export const SaveMaterialDetail: MutationResolvers<ResolverContext>['SaveMaterialDetail'] =
  async (_, { material_detail }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    if (!material_detail)
      throw Error('Материалын мэдээлэл оруулах шаардлагатай');

    if (material_detail.material_detail_id) {
      // edit mode
      const savedMaterialDetail = await MaterialDetail.findByPk(
        material_detail.material_detail_id,
      );
      if (!savedMaterialDetail) throw Error('Материалын мэдээлэл олдсонгүй');

      return await (material_detail as MaterialDetail).update(material_detail);
    }
    // insert mode
    const item = { ...material_detail, material_detail_id: uuidv4() };
    return await MaterialDetail.create(item);
  };

export const DeleteMaterialDetail: MutationResolvers<ResolverContext>['DeleteMaterialDetail'] =
  async (_, { material_detail_id }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    if (!material_detail_id)
      throw Error('Материалын дугаар оруулах шаардлагатай');

    const savedMaterialDetail = await MaterialDetail.findByPk(
      material_detail_id,
    );
    if (!savedMaterialDetail) throw Error('Материалын мэдээлэл олдсонгүй');

    await (savedMaterialDetail as MaterialDetail).update({
      ...savedMaterialDetail,
      del_yn: 'Y',
    });

    return true;
  };
