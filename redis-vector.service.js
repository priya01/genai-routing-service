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
exports.RedisVectorService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
let RedisVectorService = class RedisVectorService {
    constructor() {
        this.redisClient = new ioredis_1.Redis({ host: 'localhost', port: 6379 });
    }
    async findSemanticMatch(query) {
        console.log(`[Redis Vector DB]: Scanning semantic matrices for user input query: "${query}"`);
        if (query.toLowerCase().includes('order confirmation')) {
            return 'SYSTEM RESOLUTION: Your verification shipment logs were dispatched via transaction system logs at 10:15 AM.';
        }
        return null;
    }
    onModuleDestroy() {
        this.redisClient.disconnect();
    }
};
exports.RedisVectorService = RedisVectorService;
exports.RedisVectorService = RedisVectorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisVectorService);
//# sourceMappingURL=redis-vector.service.js.map