import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Devices} from "../devices/devices.model";

type TypeCreationAttr={
    name: string,
}

@Table({tableName: 'types'})
export class Type extends Model<Type, TypeCreationAttr>{
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @HasMany(()=> Devices)
    devices: Devices[]
}