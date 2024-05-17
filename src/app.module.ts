import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesService } from './heroes/heroes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HeroesModule
  ],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class AppModule { }
