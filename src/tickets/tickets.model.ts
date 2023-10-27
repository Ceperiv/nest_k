import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Tickets_' })
export class TicketsModel extends Model<TicketsModel> {
  @Column({ type: DataType.INTEGER, allowNull: false, autoIncrement: true })
  id?: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  amount: number;

  @Column({ type: DataType.NUMBER, allowNull: false })
  price: number;

  @Column({ type: DataType.DATE, allowNull: true })
  startDate?: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  endDate?: Date;
}
