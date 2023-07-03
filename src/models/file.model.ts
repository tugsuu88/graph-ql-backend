import sequelize from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'tb_file',
  freezeTableName: true,
  paranoid: true,
})
export class File extends Model {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  })
  file_id!: string;

  @Column({
    type: DataType.STRING(),
  })
  file_path!: string;

  @Column({
    type: DataType.STRING(),
  })
  original_name!: string;

  @Column({
    type: DataType.STRING(),
  })
  mime_type!: string;

  @Column({
    type: DataType.STRING(),
  })
  destination!: string;

  @Column({
    type: DataType.STRING(),
  })
  file_name!: string;

  @Column({
    type: DataType.INTEGER,
  })
  size!: number;
}
