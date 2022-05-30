import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Basket} from "./basket.model";

@Module({
  controllers: [BasketController],
  providers: [BasketService],
  imports:[
    SequelizeModule.forFeature([Basket])
  ]
})
export class BasketModule {}
