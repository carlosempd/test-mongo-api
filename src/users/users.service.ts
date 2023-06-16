import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { CreateUserDto } from 'src/core/dto/createUser.dto';
import { MediaService } from 'src/media/media.service';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private mediaService: MediaService
    ) {}

    findAll() {
        return this.userModel.find();
    }

    async create(body: CreateUserDto) {
        const media = await this.mediaService.create(body.profilePhoto);

        const user = await this.userModel.create({
            firstname: body.firstname,
            lastname: body.lastname,
            username: body.username,
            address: body.address,
            profilePhoto: media,
        });


        return user.populate('profilePhoto');
    }
}
