import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_user_material',
  freezeTableName: true,
  paranoid: true,
})
export class UserMaterial extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  user_material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  payment_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  payment_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  payment_date!: string;

  @Column({
    type: DataType.STRING(),
  })
  status!: string;

  @Column({
    type: DataType.STRING(),
  })
  last_comment_id!: string;

  @Column({
    type: DataType.STRING(),
    defaultValue: 'Y',
  })
  use_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  use_date!: string;

  @Column({
    type: DataType.STRING(),
    defaultValue: 'N',
  })
  del_yn!: string;
}
