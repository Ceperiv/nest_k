import { Injectable } from '@nestjs/common';

import { UserService } from '../users/user.service';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private userService: UserService,
              private jwtService:JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password.toString() === pass.toString()) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  };

  async login(user: any) {
    const payload = { email: user.dataValues.email, sub: user.dataValues.id };
    console.log(payload, 'payload')
    return {
      access_token: this.jwtService.sign(payload, {secret:'wwwwl md;fkmdlf'}),
    };
  };
}
