import {Controller, Post, Req, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "./auth.service";
import {LocalAuthGuard} from "./local-auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
}
