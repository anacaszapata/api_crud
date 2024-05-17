import { IsBoolean, IsNotEmpty } from "class-validator";


export class UpdateHeroDto  {
    
    @IsNotEmpty()
    name: string

}