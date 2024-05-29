import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroDto {
    
    @ApiProperty({ example: 'Spider-Man', description: 'The name of the hero' })
    @IsNotEmpty()
    @IsString()
    name: string
    
    @ApiProperty({ example: 'Spider-like abilities', description: 'The power of the hero' })
    @IsNotEmpty()
    @IsString()
    power: string
    
    @ApiProperty({ example: 'Marvel', description: 'The comic house of the hero' })
    @IsNotEmpty()
    @IsBoolean()
    comicHouse: string

}