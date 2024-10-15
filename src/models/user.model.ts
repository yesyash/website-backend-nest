import { Model, Column, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  phoneNumber: string;
}
