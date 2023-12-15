import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleModel } from './role.model';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  createRole(@Body() body: RoleModel) {
    try {
      console.log(111111);
      return this.roleService.createRole(body);
    } catch (e) {
      console.log(e, 333333);
    }
  }

  @Get()
  getAllRoles() {
    return this.roleService.getAllRoles();
  }
}
