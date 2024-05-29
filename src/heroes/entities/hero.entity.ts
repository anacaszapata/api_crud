import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The unique identifier of the hero' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Spider-Man', description: 'The name of the hero' })
  name: string;

  @Column()
  @ApiProperty({ example: 'Spider-like abilities', description: 'The power of the hero' })
  power: string;

  @Column()
  @ApiProperty({ example: 'Marvel', description: 'The comic house of the hero' })
  comicHouse: string;
}
