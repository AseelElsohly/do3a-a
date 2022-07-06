import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Do3aaService } from './do3aa.service';
import { CreateDo3aaDto } from './dto/create-do3aa.dto';
import { SearchDo3aaDto } from './dto/search-do3aa.dto';
import { UpdateDo3aaDto } from './dto/update-do3aa.dto';

@Controller('do3aa')
export class Do3aaController {
  constructor(private readonly do3aaService: Do3aaService) {}

  @Post('/add')
  async create(@Body() createDo3aaDto: CreateDo3aaDto) {
    const data = await this.do3aaService.create(createDo3aaDto);
    return{
      message:"Do3aa created",
      data:data
    }
  }

  @Get('/list/all')
  async findAll() {
    const data = await this.do3aaService.findAll();
    return{
      message:"Do3aa found",
      data:data
    }
  }

  @Get('/list/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.do3aaService.findOne(+id);
    return{
      message:"Do3aa found",
      data:data
    }
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() updateDo3aaDto: UpdateDo3aaDto) {
    const data = await this.do3aaService.update(+id, updateDo3aaDto);
    return{
      message:"Do3aa updated",
      data:data
    }
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const data = await this.do3aaService.remove(+id);
    return{
      message:"Do3aa deleted",
      data:data
    }
  }

  @Post('/search')
  async search(@Body() searchDo3aaDto: SearchDo3aaDto) {
    const data = await this.do3aaService.search(searchDo3aaDto);
    return{
      message:"Searching for" + searchDo3aaDto.do3aa,
      data:data
    }
  }
}
