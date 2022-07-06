import { PartialType } from '@nestjs/mapped-types';
import { CreateDo3aaDto } from './create-do3aa.dto';

export class UpdateDo3aaDto extends PartialType(CreateDo3aaDto) {}
