import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('GenAI Support Microservice Sandbox')
    .setDescription('Orchestration platform minimizing token expenditure utilizing vector databases cache mappings.')
    .setVersion('2.0')
    .build();

  const doc = SwaggerModule.createDocument(app, config);
  
    SwaggerModule.setup('api/docs', app, doc);
  // Custom Dark Mode Injection Layer targeting port 3001 layout profiles
  // SwaggerModule.setup('api/docs', app, doc, {
  //   customCss: `
  //     .swagger-ui { filter: invert(88%) hue-rotate(180deg); }
  //     .swagger-ui .microlight { filter: invert(0%) hue-rotate(0deg); }
  //     body { background-color: #1a1a1a !important; }
  //   `,
  // });

  await app.listen(3001); // Isolated port routing map structure configuration
  console.log(`🚀 GenAI Orchestrator live validation loop: http://localhost:3001/api/docs`);
}
bootstrap();
