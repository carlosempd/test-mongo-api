import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}