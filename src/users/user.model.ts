import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CarsModel } from '../cars/cars.model';
import { RoleModel } from '../role/role.model';
import { UserRoleModel } from '../role/user-role.model';

@Table({ tableName: '_users' })
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @ApiProperty({
    example: 'Ivan',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  age: number;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  password: string;

  @Column({ type: DataType.STRING, allowNull: true })
  gender: string;

  @HasMany(() => CarsModel)
  cars: CarsModel[];

  @BelongsToMany(() => RoleModel, () => UserRoleModel)
  roles: RoleModel[];
}
