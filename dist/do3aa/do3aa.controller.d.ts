import { Do3aaService } from './do3aa.service';
import { CreateDo3aaDto } from './dto/create-do3aa.dto';
import { SearchDo3aaDto } from './dto/search-do3aa.dto';
import { UpdateDo3aaDto } from './dto/update-do3aa.dto';
export declare class Do3aaController {
    private readonly do3aaService;
    constructor(do3aaService: Do3aaService);
    create(createDo3aaDto: CreateDo3aaDto): Promise<{
        message: string;
        data: import(".prisma/client").do3aa;
    }>;
    findAll(): Promise<{
        message: string;
        data: import(".prisma/client").do3aa[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: import(".prisma/client").do3aa;
    }>;
    update(id: string, updateDo3aaDto: UpdateDo3aaDto): Promise<{
        message: string;
        data: import(".prisma/client").do3aa;
    }>;
    remove(id: string): Promise<{
        message: string;
        data: import(".prisma/client").do3aa;
    }>;
    search(searchDo3aaDto: SearchDo3aaDto): Promise<{
        message: string;
        data: import(".prisma/client").do3aa[];
    }>;
}
