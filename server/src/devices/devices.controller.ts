import {Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import {DevicesService} from "./devices.service";
import {Request, Response} from "express";

@Controller('devices')
export class DevicesController {
    constructor(private devicesService: DevicesService) {}

    @Post()
    createDevice(@Req() req:Request, @Res() res: Response ){
       return this.devicesService.createDevice(req, res)
    }

    @Get()
    getAllDevices(@Req() req: Request, @Res() res: Response ){
        return this.devicesService.getAllDevices(req, res)
    }

    @Get('/:id')
    getDevice(@Param('id') id:string){
        return this.devicesService.getDeviceById(id)
    }



}
