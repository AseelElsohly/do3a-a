import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateDo3aaDto } from './dto/create-do3aa.dto';
import { SearchDo3aaDto } from './dto/search-do3aa.dto';
import { UpdateDo3aaDto } from './dto/update-do3aa.dto';

@Injectable()
export class Do3aaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDo3aaDto: CreateDo3aaDto) {
    const do3aa = await this.prisma.do3aa.create({
      data: {
        do3aa: createDo3aaDto.do3aa,
      },
    });

    return do3aa;
  }

  async findAll() {
    const all = await this.prisma.do3aa.findMany()
    return all;
  }

  async findOne(id: number) {
    const do3aa = await this.prisma.do3aa.findUnique({
      where: {
        id: id,
      },
    });
    return do3aa;
  }

  async update(id: number, updateDo3aaDto: UpdateDo3aaDto) {
    const do3aa = await this.prisma.do3aa.update(
      {
        data: {
          do3aa: updateDo3aaDto.do3aa,
      },
        where: {
        id: id,
        }
    });
  
    return do3aa;
  }

  async remove(id: number) {
    const do3aa = await this.prisma.do3aa.delete(
      {
        where: {
          id: id,
        }
      }
    )
 
    return do3aa;
  }
  async search(searchDo3aaDto: SearchDo3aaDto) {
  const do3aa = await this.prisma.do3aa.findMany({
      where: {
      do3aa:{
        search:searchDo3aaDto.do3aa
      }
    },
  })
    return do3aa;
 }
}
