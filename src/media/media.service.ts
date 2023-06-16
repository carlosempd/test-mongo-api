import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media } from 'src/schemas/media.schema';

@Injectable()
export class MediaService {
    constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

    create(media: Media) {
        return this.mediaModel.create(media);
    }
}
