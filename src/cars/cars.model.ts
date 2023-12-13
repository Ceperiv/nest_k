import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {UserModel} from "../users/user.model";

@Table({ tableName: '_cars' })
export class CarsModel extends Model<CarsModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id?: number;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  model: string;

  @Column({ type: DataType.STRING, allowNull: false })
  color: string;

  @Column({ type: DataType.NUMBER, allowNull: false })
  price: number;

  @Column({ type: DataType.DATE, allowNull: true })
  startDate?: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  endDate?: Date;

  @BelongsTo(() => UserModel)
  client: UserModel;
}
