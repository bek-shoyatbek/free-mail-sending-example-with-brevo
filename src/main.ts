import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get('APP_PORT');

  // ___________ Swagger _____________

  const config = new DocumentBuilder()
    .setTitle("Brevo email sending example")
    .setDescription('Brevo email sending example API description')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);


  // ___________ Validation _____________

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // ___________ Cors _____________
  app.enableCors();


  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
