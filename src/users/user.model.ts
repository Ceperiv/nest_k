import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Users_' })
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  age: number;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: true })
  gender: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isAdmin: boolean;
}
