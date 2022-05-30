import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Type} from "../types/types.model";
import {Brand} from "../brands/brands.model";

@Table({tableName: 'devices'})
export class Devices extends Model{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @Column({type: DataType.INTEGER, allowNull: false })
    price: number

    @Column({type: DataType.INTEGER, defaultValue: 0 })
    rating: number

    @Column({type: DataType.STRING})
    img: string

    @ForeignKey(()=> Type)
    @Column({type: DataType.INTEGER, unique: true})
    typeId: number

    @ForeignKey(()=> Brand)
    @Column({type: DataType.INTEGER, unique: true})
    brandId: number

    @BelongsTo(()=> Type)
    types: Type[]

    @BelongsTo(()=> Brand)
    brands: Brand[]
}