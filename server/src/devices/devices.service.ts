import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Devices} from "./devices.model";

@Injectable()
export class DevicesService {
    constructor(@InjectModel(Devices) private devicesRepository: typeof Devices) {}

    async getAllDevices(req, res){
        const {brandId, typeId} = req.query
        let devices
        if(!brandId && !typeId){
            devices = await this.devicesRepository.findAll()
        }
        if(!brandId && typeId){
            devices = await this.devicesRepository.findAll({where:{typeId}})
        }
        if(brandId && !typeId){
            devices = await this.devicesRepository.findAll({where:{brandId}})
        }
        if(brandId && typeId){
            devices = await this.devicesRepository.findAll({where:{brandId, typeId}})
        }

        return res.json(devices)

    }

    async getDeviceById(id:string){
        const device = await this.devicesRepository.findOne({where: {id}})
        return device
    }

    async createDevice(req, res){
        let {name, price, brandId, typeId, img} = req.body
        const device = await this.devicesRepository.create({name, price, brandId, typeId, img})
        return res.json(device)
    }
}
