import { Do3aaService } from './do3aa.service';
import { CreateDo3aaDto } from './dto/create-do3aa.dto';
import { UpdateDo3aaDto } from './dto/update-do3aa.dto';
export declare class Do3aaController {
    private readonly do3aaService;
    constructor(do3aaService: Do3aaService);
    create(createDo3aaDto: CreateDo3aaDto): Promise<import(".prisma/client").do3aa>;
    findAll(): Promise<import(".prisma/client").do3aa[]>;
    findOne(id: string): Promise<import(".prisma/client").do3aa>;
    update(id: string, updateDo3aaDto: UpdateDo3aaDto): Promise<import(".prisma/client").do3aa>;
    remove(id: string): void;
}
