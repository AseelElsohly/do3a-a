import { Module } from '@nestjs/common';
import { Do3aaService } from './do3aa.service';
import { Do3aaController } from './do3aa.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [Do3aaController],
  providers: [Do3aaService, PrismaService],
})
export class Do3aaModule {}
