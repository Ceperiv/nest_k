import {Module} from '@nestjs/common';

import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UserModule} from '../users/user.module';
import {LocalStrategy} from "./local.strategy";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: 'secret_key',
        signOptions: {expiresIn: '60s'},
    }),],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtService],
    exports: [AuthService],
})
export class AuthModule {
}
