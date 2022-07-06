import { PrismaService } from 'src/prisma.service';
import { CreateDo3aaDto } from './dto/create-do3aa.dto';
import { UpdateDo3aaDto } from './dto/update-do3aa.dto';
export declare class Do3aaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createDo3aaDto: CreateDo3aaDto): Promise<import(".prisma/client").do3aa>;
    findAll(): Promise<import(".prisma/client").do3aa[]>;
    findOne(id: number): Promise<import(".prisma/client").do3aa>;
    update(id: number, updateDo3aaDto: UpdateDo3aaDto): Promise<import(".prisma/client").do3aa>;
    remove(id: number): void;
}
