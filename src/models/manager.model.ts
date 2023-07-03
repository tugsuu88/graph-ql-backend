import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_manager',
  freezeTableName: true,
  paranoid: true,
})
export class Manager extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  manager_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_name!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_phone!: string;

  @Column({
    type: DataType.STRING(),
  })
  manager_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  cpny_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  pass_enc!: string;

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
