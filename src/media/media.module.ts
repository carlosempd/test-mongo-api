import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Media, MediaSchema } from 'src/schemas/media.schema';

@Module({
  providers: [MediaService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Media.name,
        schema: MediaSchema
      }
    ]),
  ],
  exports: [MediaService]
})
export class MediaModule {}
