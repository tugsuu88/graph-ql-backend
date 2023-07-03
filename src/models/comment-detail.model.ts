import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_comment_detail',
  freezeTableName: true,
  paranoid: true,
})
export class CommentDetail extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  comment_detail_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  comment_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_material_detail_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  descr!: string;
}
