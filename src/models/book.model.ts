import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'books',
  freezeTableName: true,
  paranoid: true,
})
export class book extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  descr!: string;
}
