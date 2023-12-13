import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: '_role' })
export class RoleModel extends Model<RoleModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;
}
