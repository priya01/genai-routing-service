import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisVectorService implements OnModuleDestroy {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({ host: '127.0.0.1', port: 6380 });
  }

  // 1. Reading from the real database
  async findSemanticMatch(query: string): Promise<string | null> {
    console.log(`[Redis Vector DB]: Scanning semantic matrices for query: "${query}"`);
    
    // Normalizing string patterns to build an exact tracking database key
    const exactCacheKey = `cache:ai:${Buffer.from(query.trim().toLowerCase()).toString('hex')}`;
    return await this.redisClient.get(exactCacheKey);
  }

  // 2. TRUE WRITE OPERATION: Forces data into Redis RAM disk!
  async saveSemanticCache(query: string, responseText: string): Promise<void> {
    const exactCacheKey = `cache:ai:${Buffer.from(query.trim().toLowerCase()).toString('hex')}`;
    console.log(`[Redis Vector DB]: Writing new data fact into cache -> ${exactCacheKey}`);
    
    // Explicitly write the value with a 1-hour expiration TTL window
    await this.redisClient.set(exactCacheKey, responseText, 'EX', 3600);
  }

  onModuleDestroy() {
    this.redisClient.disconnect();
  }
}
