import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Brand} from "./brands.model";
import {CreateBrandDto} from "./dto/brands.dto";

@Injectable()
export class BrandsService {
    constructor( @InjectModel(Brand) private brandRepository: typeof Brand) {}

    async createBrand(brandDto: CreateBrandDto){
       const brand = await this.brandRepository.create(brandDto)
        return brand
    }


    async getAllBrands(){
        const brands = await this.brandRepository.findAll()
        return brands
    }
}
