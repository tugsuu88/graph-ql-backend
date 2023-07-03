import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_user_material_log',
  freezeTableName: true,
  paranoid: true,
})
export class UserMaterialLog extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  log_id!: string;

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
  material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  from_status!: string;

  @Column({
    type: DataType.STRING(),
  })
  to_status!: string;
}
