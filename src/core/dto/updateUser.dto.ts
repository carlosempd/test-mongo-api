import { IsString } from "class-validator";
import { Media } from "src/schemas/media.schema";

export class UpdateUserDto {
    @IsString()
    firstname: string;
    
    @IsString()
    lastname: string;
    
    @IsString()
    username: string;
    
    @IsString()
    address: string;

    profilePhoto?: Media;
}