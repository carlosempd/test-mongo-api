import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Media } from './media.schema';
import { Type } from 'class-transformer';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  username: string;

  @Prop()
  address: string;

  @Prop({
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Media'
    }]
  })
  @Type(() => Media)
  profilePhoto: Media;
}

export const UserSchema = SchemaFactory.createForClass(User);
