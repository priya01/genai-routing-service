import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { SupportQueryDto } from './dto/query.dto';
import { AgentService } from './agent.service';

@ApiTags('GenAI Orchestration Routing Ingress')
@Controller('ai-agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post('query')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Calculate intent matching matrices using token constraints parameters.' })
  @ApiBody({ type: SupportQueryDto })
  @ApiResponse({ status: 200, description: 'Operation executed successfully.' })
  async executeQueryRoute(@Body() body: SupportQueryDto) {
    return await this.agentService.processCustomerQuery(body.userQuery);
  }
}
