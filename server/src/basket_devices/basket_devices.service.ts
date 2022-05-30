import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {BasketDevices} from "./basket_devices.model";

@Injectable()
export class BasketDevicesService {
    constructor( @InjectModel(BasketDevices) basketDevices: typeof BasketDevices) {}


}
