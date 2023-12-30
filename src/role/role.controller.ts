import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleModel } from './role.model';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  createRole(@Body() body: RoleModel) {
    try {
      return this.roleService.createRole(body);
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  getAllRoles() {
    return this.roleService.getAllRoles();
  }
}
