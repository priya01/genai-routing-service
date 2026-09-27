import { Module } from '@nestjs/common';
import { AgentController } from './agent/agent.controller';
import { AgentService } from './agent/agent.service';
import { RedisVectorService } from './redis-vector.service';

@Module({
  imports: [],
  controllers: [AgentController],
  providers: [AgentService, RedisVectorService],
})
export class AppModule {}
