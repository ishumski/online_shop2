import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Brand} from "./brands.model";
import {Devices} from "../devices/devices.model";


@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports:[
    SequelizeModule.forFeature([Brand, Devices])
  ],
  exports:[BrandsService]
})
export class BrandsModule {}
