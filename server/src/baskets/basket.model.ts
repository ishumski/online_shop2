import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {BasketDevices} from "../basket_devices/basket_devices.model";


@Table({tableName: 'baskets'})
export class Basket extends Model{

    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false })
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: true})
    userId: number

    @BelongsTo(()=> User)
    user: User

    @HasMany(()=> BasketDevices)
    basketDevices: BasketDevices[]

}