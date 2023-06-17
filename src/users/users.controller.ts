import { Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/core/dto/createUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FormDataRequest } from 'nestjs-form-data';
import { UpdateUserDto } from 'src/core/dto/updateUser.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.userService.findAll();
    }


    @UsePipes(new ValidationPipe())
    @FormDataRequest()
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }


    @UseGuards(AuthGuard)
    @Put(':id')
    @FormDataRequest()
    update(
        @Param('id') id: string, 
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.update(id, updateUserDto);
    }
}
