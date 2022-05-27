import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle(`swagger`)
        .setDescription(`api description`)
        .setVersion('0.0.1')
        .addTag('sns')
        .build(),
    );
    SwaggerModule.setup(`api`, app, document);
  }
  await app.listen(3000);
}
bootstrap();
