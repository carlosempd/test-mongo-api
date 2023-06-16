import { Body, Controller, Get, Post, Req, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/core/dto/createUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @UsePipes(new ValidationPipe())
    @FormDataRequest()
    @Post()
    create(@Body() body: CreateUserDto) {
        console.log('body', body);
        
        return this.userService.create(body);
    }

    @UseInterceptors(FileInterceptor('file'))
    @Post('upload')
    uploadProfilePhoto(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        
    }
}
