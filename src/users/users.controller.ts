import { Body,  Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  //GET /users
  //GET /users/:id
  // POST/users
  //PATCH/users/:id
  //DELETE /users/:id
  @Get() //GET/users?role=value
  findAll(@Query('role') role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    return this.userService.findAll(role);
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id') //Get/users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
  @Post() //Post/users
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.userService.create(user);
  }
  @Patch(':id') //Get/users/:id
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) userUpdate: UpdateUserDto ) {
    return this.userService.update(id, userUpdate);
  }
  @Delete(':id') //Get/users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}