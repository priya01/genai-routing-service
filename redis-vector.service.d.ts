import { OnModuleDestroy } from '@nestjs/common';
export declare class RedisVectorService implements OnModuleDestroy {
    private readonly redisClient;
    constructor();
    findSemanticMatch(query: string): Promise<string | null>;
    onModuleDestroy(): void;
}
