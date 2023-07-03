import sequelize from 'sequelize';
import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_code',
  freezeTableName: true,
  paranoid: true,
})
export class Code extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  code_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  parent_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  code_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  code!: string;

  @Column({
    type: DataType.STRING(),
  })
  code_name!: string;

  @Column({
    type: DataType.STRING(),
  })
  descr!: string;

  @Column({
    type: DataType.INTEGER,
  })
  order!: number;

  @Column({
    type: DataType.STRING(),
  })
  use_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  del_yn!: string;

  @Column({
    type: DataType.STRING(),
  })
  reserved1!: string;

  @Column({
    type: DataType.STRING(),
  })
  reserved2!: string;
}
