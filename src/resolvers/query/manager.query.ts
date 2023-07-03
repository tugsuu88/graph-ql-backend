import { QueryResolvers } from '@/graphql';
import { Manager } from '@/models/manager.model';
import { ResolverContext } from '..';
import { messages } from '@/utils/messages';

export const GetManager: QueryResolvers<ResolverContext>['GetManager'] = async (
  _,
  { manager_id },
  { token },
) => {
  // if (!token) throw Error(messages.unauthorized);

  return await Manager.findByPk(manager_id);
};

export const ListManagerPage: QueryResolvers<ResolverContext>['ListManagerPage'] =
  async (_, { page, limit, advanced }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    const listManager = await Manager.findAndCountAll({
      where: advanced,
      limit: limit,
      offset: page,
    });

    return {
      listManager: listManager.rows,
      totalPages: Math.ceil(listManager.count / limit),
      totalItems: listManager.count,
    };
  };

export const ListManager: QueryResolvers<ResolverContext>['ListManager'] =
  async (_, { condition }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    const listManager = await Manager.findAll({
      where: condition,
    });

    return listManager;
  };
