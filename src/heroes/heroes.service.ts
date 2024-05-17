import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from './entities/hero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HeroesService {

    constructor(@InjectRepository(Hero) private readonly heroRepository: Repository<Hero>) { }

    async create(createHeroDto: CreateHeroDto) {
        const hero = this.heroRepository.create(createHeroDto);
        return await this.heroRepository.save(hero);
    }

    async findAll() {
        return await this.heroRepository.find();
    }

    async findOne(id: number) {
        const hero = await this.heroRepository.findOneBy({ id })

        if (!hero) throw new NotFoundException(`Hero with id ${id} not found`)

        return hero

    }

    async update(id: number, { name }: UpdateHeroDto) {
        const hero = await this.heroRepository.preload({
            id,
            name,
        })

        if (!hero) throw new NotFoundException(`Hero with id ${id} not found`)

        return await this.heroRepository.save(hero)

    }

    async remove(id: number) {
        const hero = await this.heroRepository.findOneBy({ id })

        if (!hero) throw new NotFoundException(`Hero with id ${id} not found`)

        return await this.heroRepository.remove(hero)

    }
}

