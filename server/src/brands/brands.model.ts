import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Devices} from "../devices/devices.model";

@Table({tableName:'brands'})
export class Brand extends Model<Brand>{
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string

    @HasMany(()=> Devices)
    devices: Devices[]
}