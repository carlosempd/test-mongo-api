import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data';
import { MediaModule } from 'src/media/media.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    MediaModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
