import {Body, Controller, Get, Post} from '@nestjs/common';
import {TypesService} from "./types.service";
import {CreateTypesDto} from "./dto/create.types.dto";

@Controller('types')
export class TypesController {

    constructor(private typesService: TypesService) {}

    @Post()
    createUser(@Body() typeDto: CreateTypesDto ){
        return this.typesService.createType(typeDto)
    }

    @Get()
    getTypes(){
        return  this.typesService.getAllTypes()
    }

}
