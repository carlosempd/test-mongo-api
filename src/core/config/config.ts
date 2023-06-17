import { registerAs } from "@nestjs/config";

export const jwtConfig = registerAs('jwt', () => ({
    secret: process.env.JWT_SECRET
}))

export const bcryptConfig = registerAs('salt', () => ({
    rounds: process.env.SALT_ROUNDS
}))