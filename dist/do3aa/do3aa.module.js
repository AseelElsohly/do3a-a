"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do3aaModule = void 0;
const common_1 = require("@nestjs/common");
const do3aa_service_1 = require("./do3aa.service");
const do3aa_controller_1 = require("./do3aa.controller");
const prisma_service_1 = require("../prisma.service");
let Do3aaModule = class Do3aaModule {
};
Do3aaModule = __decorate([
    (0, common_1.Module)({
        controllers: [do3aa_controller_1.Do3aaController],
        providers: [do3aa_service_1.Do3aaService, prisma_service_1.PrismaService],
    })
], Do3aaModule);
exports.Do3aaModule = Do3aaModule;
//# sourceMappingURL=do3aa.module.js.map