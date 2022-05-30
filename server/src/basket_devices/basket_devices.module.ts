import { Module } from '@nestjs/common';
import { BasketDevicesController } from './basket_devices.controller';
import { BasketDevicesService } from './basket_devices.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {BasketDevices} from "./basket_devices.model";

@Module({
  controllers: [BasketDevicesController],
  providers: [BasketDevicesService],
  imports:[
      SequelizeModule.forFeature([BasketDevices])
  ]
})
export class BasketDevicesModule {}
