import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/core/dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}

    async login(loginDto: LoginDto) {
        const user = await (this.userService
            .findByUsername(loginDto.username)
            .select('password')
            .select('username'));
        
        if (!user || user?.password !== loginDto.password) {
            throw new UnauthorizedException();
        }

        const payload = {
            sub: user.id,
            username: user.username
        }
        return {
            access_token: await this.jwtService.signAsync(payload, {
                secret: this.configService.get<string>('jwt.secret'),
            })
        };
    }
}