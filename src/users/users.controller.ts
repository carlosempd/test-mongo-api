import { 
    Body, 
    Controller, 
    Get, 
    Param, 
    Post, 
    Put, 
    UseGuards, 
    UsePipes, 
    ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/core/dto/createUser.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { UpdateUserDto } from 'src/core/dto/updateUser.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { User } from 'src/schemas/user.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiOkResponse({ description: 'Ok response', type: Array<User> })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @ApiConsumes('multipart/form-data')
    @ApiBody({
      schema: {
        type: 'object',
        properties: {
            firstname: { type: 'string' },
            lastname: { type: 'string' },
            username: { type: 'string' },
            password: { type: 'string' },
            address: { type: 'string' },
            profilePhoto: {
                type: 'string',
                format: 'binary',
            },
        },
      },
    })
    @ApiCreatedResponse({ description: 'Created Succesfully', type: User })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @UsePipes(new ValidationPipe())
    @FormDataRequest()
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }


    @ApiConsumes('multipart/form-data')
    @ApiBody({
      schema: {
        type: 'object',
        properties: {
            firstname: { type: 'string' },
            lastname: { type: 'string' },
            username: { type: 'string' },
            address: { type: 'string' },
            profilePhoto: {
                type: 'string',
                format: 'binary',
            },
        },
      },
    })
    @ApiCreatedResponse({ description: 'Updated Succesfully', type: User })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    @ApiBearerAuth()
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
