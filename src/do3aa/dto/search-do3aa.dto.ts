import { IsNotEmpty, IsString } from 'class-validator';

export class SearchDo3aaDto {
    @IsString()
    @IsNotEmpty()
    do3aa: string;
}
