import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_sms',
  freezeTableName: true,
  paranoid: true,
})
export class Sms extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  sms_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  phone!: string;

  @Column({
    type: DataType.STRING(),
  })
  subject!: string;

  @Column({
    type: DataType.STRING(),
  })
  content!: string;

  @Column({
    type: DataType.STRING(),
  })
  user_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  status!: string;

  @Column({
    type: DataType.STRING(),
  })
  source_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  source_id!: string;
}
