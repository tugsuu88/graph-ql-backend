import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_user',
  freezeTableName: true,
  paranoid: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  cpny_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_name!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_phone!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_phone1!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_email!: string;

  @Column({
    type: DataType.STRING(),
  })
  pass_enc!: string;

  @Column({
    type: DataType.STRING(),
  })
  pass_num!: string;

  @Column({
    type: DataType.STRING(),
  })
  email_verified_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  phone_verified_yn!: string;

  @Column({
    type: DataType.STRING(),
    defaultValue: 'Y',
  })
  use_yn!: string;

  @Column({
    type: DataType.STRING(),
    defaultValue: 'N',
  })
  del_yn!: string;
}
