import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesController } from './heroes/heroes.controller';
import { ConfigModule } from '@nestjs/config';
import { HeroesService } from './heroes/heroes.service';


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
      extra:{
        ssl:true,
      },
    }),
    HeroesModule
  ],
  // controllers: [HeroesController],
  
})
export class AppModule { }
