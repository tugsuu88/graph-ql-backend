import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_user_material_detail',
  freezeTableName: true,
  paranoid: true,
})
export class UserMaterialDetail extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  user_material_detail_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_detail_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  source_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  source_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_id!: string;
}
