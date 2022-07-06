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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Do3aaController = void 0;
const common_1 = require("@nestjs/common");
const do3aa_service_1 = require("./do3aa.service");
const create_do3aa_dto_1 = require("./dto/create-do3aa.dto");
const update_do3aa_dto_1 = require("./dto/update-do3aa.dto");
let Do3aaController = class Do3aaController {
    constructor(do3aaService) {
        this.do3aaService = do3aaService;
    }
    create(createDo3aaDto) {
        return this.do3aaService.create(createDo3aaDto);
    }
    findAll() {
        return this.do3aaService.findAll();
    }
    findOne(id) {
        return this.do3aaService.findOne(+id);
    }
    update(id, updateDo3aaDto) {
        return this.do3aaService.update(+id, updateDo3aaDto);
    }
    remove(id) {
        return this.do3aaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_do3aa_dto_1.CreateDo3aaDto]),
    __metadata("design:returntype", void 0)
], Do3aaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Do3aaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/list/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Do3aaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_do3aa_dto_1.UpdateDo3aaDto]),
    __metadata("design:returntype", void 0)
], Do3aaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Do3aaController.prototype, "remove", null);
Do3aaController = __decorate([
    (0, common_1.Controller)('do3aa'),
    __metadata("design:paramtypes", [do3aa_service_1.Do3aaService])
], Do3aaController);
exports.Do3aaController = Do3aaController;
//# sourceMappingURL=do3aa.controller.js.map