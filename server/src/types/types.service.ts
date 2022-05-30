import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Type} from "./types.model";
import {CreateTypesDto} from "./dto/create.types.dto";

@Injectable()
export class TypesService {
    constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

    async createType( dto: CreateTypesDto ){
        const type = await this.typeRepository.create(dto)
        return type
    }

    async getAllTypes(){
        const types = await this.typeRepository.findAll()
        return types
    }
}
