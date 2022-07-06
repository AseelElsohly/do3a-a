import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDo3aaDto {
  @IsString()
  @IsNotEmpty()
  do3aa: string;
}
