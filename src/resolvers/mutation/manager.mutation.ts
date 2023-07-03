import bcrypt from 'bcryptjs';

import { MutationResolvers } from '@/graphql';
import { ResolverContext } from '..';
import { createToken } from '@/utils/context';
import { messages } from '@/utils/messages';
import { Manager } from '@/models/manager.model';
import { v4 as uuidv4 } from 'uuid';

export const ManagerLogin: MutationResolvers<ResolverContext>['ManagerLogin'] =
  async (_, { phone, password }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    const manager = await Manager.findOne({
      where: { manager_phone: phone, use_yn: 'Y', del_yn: 'N' },
    });
    if (!manager) throw Error('Хэрэглэгчийн мэдээлэл олдсонгүй');

    const match = await bcrypt.compare(password, manager.pass_enc);
    if (!match) throw Error('Хэрэглэгчийн нууц үг буруу байна');

    return {
      token: createToken(manager.manager_id, manager.manager_phone),
      manager: manager,
    };
  };

export const SaveManager: MutationResolvers<ResolverContext>['SaveManager'] =
  async (_, { manager }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    if (!manager) throw Error('Хэрэглэгчийн мэдээлэл оруулах шаардлагатай');
    if (!manager.manager_phone)
      throw Error('Утасны дугаар оруулах шаардлагатай');
    if (!manager.manager_pass) throw Error('Нууц үг оруулах шаардлагатай');

    const existManager = await Manager.findOne({
      where: { manager_phone: manager.manager_phone, use_yn: 'Y', del_yn: 'N' },
    });

    if (existManager)
      throw Error(
        '[' +
          manager.manager_phone +
          '] утасны дугаараар өмнө нь бүртгэгдсэн байна.',
      );

    const pass_enc = bcrypt.hashSync(manager.manager_pass, 12);
    const savedManager = await Manager.create({
      ...manager,
      manager_id: uuidv4(),
      pass_enc: pass_enc,
      cpny_id: process.env.cpny_id,
    });
    return savedManager;
  };

export const DeleteManager: MutationResolvers<ResolverContext>['DeleteManager'] =
  async (_, { manager_id }, { token }) => {
    // if (!token) throw Error(messages.unauthorized);

    if (!manager_id) throw Error('Байцаагчын дугаар оруулна уу');
    const manager = await Manager.findByPk(manager_id);
    if (!manager) throw Error('Байцаагч олдсонгүй');

    await (manager as Manager).update({ del_yn: 'Y' });
    return true;
  };
