import { IsNotEmpty } from "class-validator";
import { FileSystemStoredFile, IsFile } from "nestjs-form-data";
import { Media } from "src/schemas/media.schema";

export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    username: string;

    address?: string;

    profilePhoto?: Media;
}