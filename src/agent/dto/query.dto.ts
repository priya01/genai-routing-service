import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class SupportQueryDto {
  @ApiProperty({ 
    example: 'Where is my order confirmation email?', 
    description: 'Raw consumer request textual payload parameters.' 
  })
  @IsString()
  @IsNotEmpty()
  userQuery: string;
}
