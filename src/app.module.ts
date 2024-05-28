import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesController } from './heroes/heroes.controller';
// import { HeroesService } from './heroes.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    HeroesModule
  ],
  controllers: [HeroesController],

})
export class AppModule { }
