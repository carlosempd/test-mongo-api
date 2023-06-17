import { IsNotEmpty } from "class-validator";
import { Media } from "src/schemas/media.schema";

export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    address?: string;

    profilePhoto?: Media;
}