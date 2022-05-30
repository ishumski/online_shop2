import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {Basket} from "../baskets/basket.model";

 type UserCreationAttr={
     email: string,
     password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr>{

    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id:number

    @Column({ type: DataType.STRING, allowNull: false})
    email: string

    @Column({ type: DataType.STRING, allowNull: false})
    password: string

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: "USER" })
    role: string

    @HasOne(()=> Basket)
    basket: Basket


}