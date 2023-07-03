import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_question',
  freezeTableName: true,
  paranoid: true,
})
export class Question extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  question_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  anket_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  descr!: string;

  @Column({
    type: DataType.STRING(),
  })
  question_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  use_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  del_yn!: string;
}
