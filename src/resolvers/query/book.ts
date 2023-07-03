import { ResolverContext } from '..';
import { QueryResolvers } from '@/graphql';
import { Book } from '@/models/Book.model';

export const getBooks: QueryResolvers<ResolverContext>['getBooks'] = async (
  _,
  { limit, page },
  { token },
) => {
  console.log('-- ================ getBooks ================ --');
  var result = await Book.findAll({ where: { name: 'tulga' } });
  return {
    books: result,
    totalPages: 10,
    totalItems: 10,
  };
};
