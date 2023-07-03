import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_anket',
  freezeTableName: true,
  paranoid: true,
})
export class Anket extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  anket_id!: string;

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
