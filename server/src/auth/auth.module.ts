import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      forwardRef(()=> UserModule),
      JwtModule.register({
        secret: `${process.env.SECRET_ACCESS_KEY}`,
        signOptions:{
          expiresIn: '24h'
        }
      })
  ],
  exports: [AuthService]
})
export class AuthModule {}
