import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class UpdateHeroDto  {
    
    @ApiProperty({
        example: 'Spider-Man', description: 'The name of the hero'})
    @IsNotEmpty()
    name: string

}