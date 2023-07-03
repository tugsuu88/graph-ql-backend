import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_approved_material',
  freezeTableName: true,
  paranoid: true,
})
export class ApprovedMaterial extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  approved_material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  approved_date!: string;

  @Column({
    type: DataType.STRING(),
  })
  goal_date!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  arrived_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  arrived_date!: string;
}
