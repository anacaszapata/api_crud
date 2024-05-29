import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from '../dto/create-hero.dto';
import { UpdateHeroDto } from '../dto/update-hero.dto';

@ApiTags('heroes')
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new hero' })
  @ApiResponse({ status: 201, description: 'The hero has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createHeroDto: CreateHeroDto) {
    return this.heroesService.create(createHeroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all heroes' })
  @ApiResponse({ status: 200, description: 'Successful retrieval of all heroes.' })
  findAll() {
    return this.heroesService.findAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Search heroes' })
  @ApiQuery({ name: 'query', description: 'The search query', required: true })
  @ApiQuery({ name: 'page', description: 'The page number', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', description: 'The number of results per page', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'sortField', description: 'The field to sort by', required: false, example: 'name' })
  @ApiQuery({ name: 'sortOrder', description: 'The order to sort by', required: false, enum: ['ASC', 'DESC'], example: 'ASC' })
  @ApiResponse({
    status: 200,
    description: 'Successful retrieval of heroes matching the query.',
    schema: {
      example: {
        data: [
          {
            id: 1,
            name: 'Spider-Man',
            power: 'Spider-like abilities',
            comicHouse: 'Marvel'
          }
        ],
        currentPage: 1,
        totalPages: 1,
        totalItems: 1
      }
    }
  })
  async search(
    @Query('query') query: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sortField') sortField: string = 'name',
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
  ) {
    if (!query) {
      throw new BadRequestException('Query parameter is required');
    }

    return this.heroesService.search(query, page, limit, sortField, sortOrder);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a hero' })
  @ApiParam({ name: 'id', description: 'The id of the hero to update' })
  @ApiResponse({ status: 200, description: 'The hero has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Hero not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroesService.update(+id, updateHeroDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a hero' })
  @ApiParam({ name: 'id', description: 'The id of the hero to delete' })
  @ApiResponse({ status: 200, description: 'The hero has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Hero not found.' })
  remove(@Param('id') id: string) {
    return this.heroesService.remove(+id);
  }
}
