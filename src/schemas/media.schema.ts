import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MediaDocument = HydratedDocument<Media>;

@Schema()
export class Media {

    @Prop()
    originalName: string;

    @Prop()
    encoding: string;

    @Prop()
    busBoyMimeType: string;

    @Prop()
    buffer: Buffer;

    @Prop()
    size: string;

    @Prop()
    ext: string;

    @Prop()
    mime: string;

}


export const MediaSchema = SchemaFactory.createForClass(Media);