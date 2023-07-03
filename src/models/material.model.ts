import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_material',
  freezeTableName: true,
  paranoid: true,
})
export class Material extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_name!: string;

  @Column({
    type: DataType.STRING(),
  })
  descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  parent_material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_code!: string;

  @Column({
    type: DataType.STRING(),
  })
  use_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  del_yn!: string;
}
