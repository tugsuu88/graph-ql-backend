import { QueryResolvers } from '@/graphql';
import { User } from '@/models/User.model';
import { ResolverContext } from '..';

export const GetUser: QueryResolvers<ResolverContext>['GetUser'] = async (
  _,
  { user_id },
  { token },
) => {
  // if (!token) throw Error(messages.unauthorized);
  return await User.findOne({ where: { user_id: user_id } });
};

export const ListUsersPage: QueryResolvers<ResolverContext>['ListUsersPage'] =
  async (_, { page, limit, advanced }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    const listUser = await User.findAndCountAll({
      where: advanced,
      limit: limit,
      offset: page,
    });

    return {
      listUser: listUser.rows,
      totalPages: Math.ceil(listUser.count / limit),
      totalItems: listUser.count,
    };
  };

export const ListUsers: QueryResolvers<ResolverContext>['ListUsers'] = async (
  _,
  { condition },
  { token },
) => {
  // if (!token) throw Error(messages.unauthorized);

  const listUser = await User.findAll({
    where: condition,
  });

  return {
    listUser: listUser,
  };
};
