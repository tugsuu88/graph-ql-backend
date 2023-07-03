import { QueryResolvers } from '@/graphql';
import { Material } from '@/models/material.model';
import { Material as GraphMaterial } from '@/graphql';
import { ResolverContext } from '..';
import { messages } from '@/utils/messages';

export const GetMaterial: QueryResolvers<ResolverContext>['GetMaterial'] =
  async (_, { material_id }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);
    const savedMaterial = await Material.findByPk(material_id);
    const retMaterial = savedMaterial as GraphMaterial;

    const childMaterial = await Material.findAll({
      where: { parent_material_id: material_id },
    });

    if (childMaterial.length > 0) {
      retMaterial.isParent = 'Y';
    } else {
      retMaterial.isParent = 'N';
    }

    return retMaterial;
  };

export const ListMaterialPage: QueryResolvers<ResolverContext>['ListMaterialPage'] =
  async (_, { page, limit, advanced }, { token }) => {
    const condition = { ...advanced, parent_material_id: null };
    let list: GraphMaterial[] = [];
    // if (!token) throw Error(messages.unauthorized);

    const listMaterial = await Material.findAndCountAll({
      where: condition,
      limit: limit,
      offset: page,
    });

    for (let id in listMaterial.rows) {
      console.log('material', listMaterial.rows[id].material_id);
      const childMaterial = await Material.findAll({
        where: { parent_material_id: listMaterial.rows[id].material_id },
      });

      const retMaterial = listMaterial.rows[id] as GraphMaterial;
      if (childMaterial.length > 0) retMaterial.isParent = 'Y';
      else retMaterial.isParent = 'N';

      list = [...list, retMaterial];
    }

    return {
      listMaterial: list,
      totalPages: Math.ceil(listMaterial.count / limit),
      totalItems: listMaterial.count,
    };
  };

export const ListMaterials: QueryResolvers<ResolverContext>['ListMaterials'] =
  async (_, { advanced }, { token }) => {
    const condition = { ...advanced, parent_material_id: null };
    let list: GraphMaterial[] = [];
    // if (!token) throw Error(messages.unauthorized);

    const listMaterial = await Material.findAll({
      where: condition,
    });

    for (let id in listMaterial) {
      console.log('material', listMaterial[id].material_id);
      const childMaterial = await Material.findAll({
        where: { parent_material_id: listMaterial[id].material_id },
      });

      const retMaterial = listMaterial[id] as GraphMaterial;
      if (childMaterial.length > 0) retMaterial.isParent = 'Y';
      else retMaterial.isParent = 'N';

      list = [...list, retMaterial];
    }

    return list;
  };

export const ListSubMaterials: QueryResolvers<ResolverContext>['ListSubMaterials'] =
  async (_, { material_id }, { token }) => {
    if (!material_id) throw Error('Үндсэн материалын дугаар оруулна уу');

    return await Material.findAll({
      where: { parent_material_id: material_id },
    });
  };
