import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_user_answer',
  freezeTableName: true,
  paranoid: true,
})
export class UserAnswer extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  user_answer_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_anket_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  question_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  source_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  source_value!: string;
}
