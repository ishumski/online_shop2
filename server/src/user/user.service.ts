import { Injectable } from '@nestjs/common';
import {User} from "./user.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create.user.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: CreateUserDto ){
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers(){
        const user = await this.userRepository.findAll()
        return user
    }

    async getUserByEmail(email:string){
        const user = await this.userRepository.findOne({where: {email}})
        return user
    }

    async deleteUser(id: string){
        const user = await this.userRepository.destroy({where:{id}})
        return user

    }
}