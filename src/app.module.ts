import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MediaModule } from './media/media.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { bcryptConfig, jwtConfig } from './core/config/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://carlos:12345@localhost:27017'),
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env',
      load: [jwtConfig, bcryptConfig]
    }),
    UsersModule,
    MediaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
