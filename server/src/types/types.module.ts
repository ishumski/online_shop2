import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Type} from "./types.model";
import {Devices} from "../devices/devices.model";

@Module({
  controllers: [TypesController],
  providers: [TypesService],
  imports: [
      SequelizeModule.forFeature([Type, Devices])
  ],
    exports:[TypesService]
})
export class TypesModule {}
