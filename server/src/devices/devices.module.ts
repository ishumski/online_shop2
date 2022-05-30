import { Module } from '@nestjs/common';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Brand} from "../brands/brands.model";
import {Devices} from "./devices.model";
import {Type} from "../types/types.model";

@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
  imports:[
    SequelizeModule.forFeature([Devices, Brand, Type])
  ],
  exports: [DevicesService]
})
export class DevicesModule {}
