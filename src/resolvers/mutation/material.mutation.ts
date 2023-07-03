import { MutationResolvers } from '@/graphql';
import { Material } from '@/models/material.model';
import { ResolverContext } from '..';
import { v4 as uuidv4 } from 'uuid';
import { messages } from '@/utils/messages';

export const SaveMaterial: MutationResolvers<ResolverContext>['SaveMaterial'] =
  async (_, { material }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    if (!material) throw Error('Материалын мэдээлэл оруулах шаардлагатай');

    if (material.material_id) {
      // edit mode
      const savedMaterial = await Material.findByPk(material.material_id);
      if (!savedMaterial) throw Error('Материалын мэдээлэл олдсонгүй');

      return await (material as Material).update(material);
    }
    // insert mode
    const item = { ...material, material_id: uuidv4() };
    return await Material.create(item);
  };

export const DeleteMaterial: MutationResolvers<ResolverContext>['DeleteMaterial'] =
  async (_, { material_id }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    if (!material_id) throw Error('Материалын дугаар оруулах шаардлагатай');

    const savedMaterial = await Material.findByPk(material_id);
    if (!savedMaterial) throw Error('Материалын мэдээлэл олдсонгүй');

    await (savedMaterial as Material).update({
      ...savedMaterial,
      del_yn: 'Y',
    });

    return true;
  };
