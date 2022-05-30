import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import { UserModule } from './user/user.module';
import {User} from "./user/user.model";
import { TypesModule } from './types/types.module';
import {Type} from "./types/types.model";
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './brands/brands.module';
import { DevicesModule } from './devices/devices.module';
import {Brand} from "./brands/brands.model";
import {Devices} from "./devices/devices.model";
import {Basket} from "./baskets/basket.model";
import {BasketModule} from "./baskets/basket.module";
import { BasketDevicesModule } from './basket_devices/basket_devices.module';
import {BasketDevices} from "./basket_devices/basket_devices.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Type, Brand, Devices, Basket, BasketDevices],
      autoLoadModels: true
    }),
    UserModule,
    TypesModule,
    AuthModule,
    BrandsModule,
    DevicesModule,
    BasketModule,
    BasketDevicesModule,
  ],
})
export class AppModule {}
