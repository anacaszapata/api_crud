import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateHeroDto {
    
    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsNotEmpty()
    @IsString()
    power: string
    
    @IsNotEmpty()
    @IsBoolean()
    comicHouse: string

}