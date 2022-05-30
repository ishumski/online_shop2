import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Basket} from "../baskets/basket.model";
import {Devices} from "../devices/devices.model";

@Table({tableName: 'basket_devices'})
export class BasketDevices extends Model{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(()=> Basket)
    @Column({type: DataType.INTEGER, unique: true})
    basketId: number

    @ForeignKey(()=> Devices)
    @Column({type: DataType.INTEGER, unique: true})
    deviceId: number

    @BelongsTo(()=> Basket)
    basket: Basket

}