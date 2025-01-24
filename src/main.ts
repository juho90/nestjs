import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Auth API')
    .setDescription('User authentication API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
  console.log('Server running on http://localhost:3000');
  console.log('Swagger docs available at http://localhost:3000/api');
}
bootstrap();
