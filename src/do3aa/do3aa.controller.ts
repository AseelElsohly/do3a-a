import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Do3aaService } from './do3aa.service';
import { CreateDo3aaDto } from './dto/create-do3aa.dto';
import { UpdateDo3aaDto } from './dto/update-do3aa.dto';

@Controller('do3aa')
export class Do3aaController {
  constructor(private readonly do3aaService: Do3aaService) {}

  @Post('/add')
  create(@Body() createDo3aaDto: CreateDo3aaDto) {
    return this.do3aaService.create(createDo3aaDto);
  }

  @Get('/list/all')
  findAll() {
    return this.do3aaService.findAll();
  }

  @Get('/list/:id')
  findOne(@Param('id') id: string) {
    return this.do3aaService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateDo3aaDto: UpdateDo3aaDto) {
    return this.do3aaService.update(+id, updateDo3aaDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.do3aaService.remove(+id);
  }

  //@Post('/search')
  //create(@Body() createDo3aaDto: CreateDo3aaDto) {
    //return this.do3aaService.create(createDo3aaDto);
  //}
}
