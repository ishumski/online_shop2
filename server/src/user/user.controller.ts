import { Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    getUsers(){
        return this.userService.getAllUsers()
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:string){
        return this.userService.deleteUser(id)
    }
}
