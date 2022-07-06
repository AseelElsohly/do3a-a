import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Do3aaModule } from './do3aa/do3aa.module';

@Module({
  imports: [Do3aaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
