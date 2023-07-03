import { MutationResolvers } from '@/graphql';
import { ResolverContext } from '..';
import { Code } from '@/models/Code.model';
import { v4 as uuidv4 } from 'uuid';

export const SaveParentCode: MutationResolvers<ResolverContext>['SaveParentCode'] =
  async (_, { code }, { token }) => {
    if (code?.code_id) {
      // update mode
      const savedCode = await Code.findByPk(code.code_id);
      if (!savedCode) throw Error('Кодын мэдээлэл олдсонгүй');

      return await (savedCode as Code).update(code);
    }

    // insert mode
    const item = { ...code, code_id: uuidv4(), parent_yn: 'Y' };
    return await Code.create(item);
  };

export const DeleteParentCode: MutationResolvers<ResolverContext>['DeleteParentCode'] =
  async (_, { code_id }, { token }) => {
    if (!code_id) throw Error('Устгах мэдээлэл олдсонгүй');

    const savedCode = await Code.findByPk(code_id);
    if (!savedCode) throw Error('Кодын мэдээлэл олдсонгүй');

    const item = { ...savedCode, del_yn: 'Y' };
    await (savedCode as Code).update(item);

    return true;
  };

export const SaveDetailCodes: MutationResolvers<ResolverContext>['SaveDetailCodes'] =
  async (_, { listCode }, { token }) => {
    listCode?.map(async (item) => {
      // insert uyed
      if (item?.rowStatus === 'I') {
        const change = {
          ...item,
          code_id: uuidv4(),
          parent_yn: 'N',
        };

        return await Code.create(change);
      }

      // update uyed
      if (item?.rowStatus === 'U') {
        const savedCode = await Code.findByPk(item?.code_id);
        if (!savedCode) throw Error('Кодын мэдээлэл олдсонгүй');

        return await (savedCode as Code).update(item);
      }

      // delete uyed
      if (item?.rowStatus === 'D') {
        const savedCode = await Code.findByPk(item.code_id);
        if (!savedCode) throw Error('Кодын мэдээлэл олдсонгүй');

        await (savedCode as Code).update({ ...savedCode, del_yn: 'Y' });
      }
    });

    return true;
  };
