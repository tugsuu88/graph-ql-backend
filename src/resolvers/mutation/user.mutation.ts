import bcrypt from 'bcryptjs';

import { MutationResolvers } from '@/graphql';
import { ResolverContext } from '..';
import { User } from '@/models/User.model';
import { createToken } from '@/utils/context';
import { messages } from '@/utils/messages';

export const Register: MutationResolvers<ResolverContext>['Register'] = async (
  _,
  { user },
) => {
  if (!user) throw Error('Хэрэглэгчийн мэдээлэл оруулах шаардлагатай');
  if (!user.user_phone) throw Error('Утасны дугаар оруулах шаардлагатай');
  if (!user.password) throw Error('Нууц үг оруулах шаардлагатай');

  const existUser = await User.findOne({
    where: { user_phone: user.user_phone, use_yn: 'Y', del_yn: 'N' },
  });

  if (existUser)
    throw Error(
      '[' + user.user_phone + '] утасны дугаараар өмнө нь бүртгэгдсэн байна.',
    );

  const pass_enc = bcrypt.hashSync(user.password, 12);
  const savedUser = await User.create({ ...user, pass_enc: pass_enc });
  return savedUser;
};

export const SaveUser: MutationResolvers<ResolverContext>['SaveUser'] = async (
  _,
  { user },
  { token },
) => {
  // if (!token) throw Error(messages.unauthorized);

  if (!user) throw Error('Хэрэглэгчийн мэдээлэл оруулах шаардлагатай');
  if (!user.user_phone) throw Error('Утасны дугаар оруулах шаардлагатай');
  if (!user.password) throw Error('Нууц үг оруулах шаардлагатай');

  const existUser = await User.findOne({
    where: { user_phone: user.user_phone, use_yn: 'Y', del_yn: 'N' },
  });

  if (existUser)
    throw Error(
      '[' + user.user_phone + '] утасны дугаараар өмнө нь бүртгэгдсэн байна.',
    );

  const pass_enc = bcrypt.hashSync(user.password, 12);
  const savedUser = await User.create({ ...user, pass_enc: pass_enc });
  return savedUser;
};

export const Login: MutationResolvers<ResolverContext>['Login'] = async (
  _,
  { phone, password },
) => {
  const user = await User.findOne({
    where: { user_phone: phone, use_yn: 'Y', del_yn: 'N' },
  });
  if (!user) throw Error('Хэрэглэгчийн мэдээлэл олдсонгүй');

  const match = await bcrypt.compare(password, user.pass_enc);
  if (!match) throw Error('Хэрэглэгчийн нууц үг буруу байна');

  return {
    token: createToken(user.user_id, user.user_phone),
    user: user,
  };
};
