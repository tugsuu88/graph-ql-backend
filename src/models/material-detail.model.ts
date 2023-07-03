import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_material_detail',
  freezeTableName: true,
  paranoid: true,
})
export class MaterialDetail extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  material_detail_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_name!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  material_source_id!: string;

  @Column({
    type: DataType.STRING(),
    defaultValue: 'N',
  })
  cond_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  cond_descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  allow_file_ext!: string;

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
