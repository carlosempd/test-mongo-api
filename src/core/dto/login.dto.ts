import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty({
        type: String,
        description: 'Username of the user. Required'
    })
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty({
        type: String,
        description: 'Password of the user. Required'
    })
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}