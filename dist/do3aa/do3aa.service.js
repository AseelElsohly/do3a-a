"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do3aaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let Do3aaService = class Do3aaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDo3aaDto) {
        const do3aa = await this.prisma.do3aa.create({
            data: {
                do3aa: createDo3aaDto.do3aa,
            },
        });
        return do3aa;
    }
    async findAll() {
        const all = await this.prisma.do3aa.findMany();
        return all;
    }
    async findOne(id) {
        const do3aa = await this.prisma.do3aa.findUnique({
            where: {
                id: id,
            },
        });
        return do3aa;
    }
    async update(id, updateDo3aaDto) {
        const do3aa = await this.prisma.do3aa.update({
            data: {
                do3aa: updateDo3aaDto.do3aa,
            },
            where: {
                id: id,
            }
        });
        return do3aa;
    }
    async remove(id) {
        const do3aa = await this.prisma.do3aa.delete({
            where: {
                id: id,
            }
        });
        return do3aa;
    }
    async search(searchDo3aaDto) {
        const do3aa = await this.prisma.do3aa.findMany({
            where: {
                do3aa: {
                    search: searchDo3aaDto.do3aa
                }
            },
        });
        return do3aa;
    }
};
Do3aaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], Do3aaService);
exports.Do3aaService = Do3aaService;
//# sourceMappingURL=do3aa.service.js.map