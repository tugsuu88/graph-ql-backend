import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_comment',
  freezeTableName: true,
  paranoid: true,
})
export class Comment extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  comment!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  use_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  del_yn!: string;
}
