import { QueryResolvers } from '@/graphql';
import { Op } from 'sequelize';
import { ResolverContext } from '..';

import { Code } from '@/models/Code.model';

export const ListDetailCode: QueryResolvers<ResolverContext>['ListDetailCode'] =
  async (_, { code_type }, { token }) => {
    return await Code.findAll({
      where: { code_type: code_type, parent_yn: 'N' },
    });
  };

export const ListParentCode: QueryResolvers<ResolverContext>['ListParentCode'] =
  async (_, { page, limit, searchCondition }, { token }) => {
    let condition = { ...searchCondition };
    // if (searchCondition.code_type) {
    //   condition = {
    //     ...condition,
    //     code_type: { [Op.like]: `%${searchCondition.code_type}%` },
    //   };
    // }

    const codes = await Code.findAndCountAll({
      where: condition,
      limit: limit,
      offset: page,
    });

    return {
      codes: codes.rows,
      totalPages: Math.ceil(codes.count / limit),
      totalItems: codes.count,
    };
  };
