import {Body, Controller, Get, Post} from '@nestjs/common';
import {BrandsService} from "./brands.service";
import {CreateBrandDto} from "./dto/brands.dto";

@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandsService) {}

    @Get()
    getBrands(){
        return this.brandsService.getAllBrands()
    }

    @Post()
    createBrand(@Body() brandDto:CreateBrandDto){
        return this.brandsService.createBrand(brandDto)
    }
}
