import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from '../users/user.model';
import { RoleModel } from './role.model';

@Table({ tableName: '_user-role' })
export class UserRoleModel extends Model<UserRoleModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @ApiProperty()
  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @ForeignKey(() => RoleModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  roleId: number;
}
