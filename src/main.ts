import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {Sequelize} from "sequelize-typescript";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('nest_k')
    .setDescription(' API description')
    .setVersion('1.0')
    .addTag('<UK of Ceperiv/>')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  async function syncDatabase() {
    try {
      const sequelize = app.get(Sequelize);
      await sequelize.sync({ force: true });
      console.log('Tables have been created successfully.');
    } catch (error) {
      console.error('Error syncing tables:', error);
    }
  }
  await syncDatabase();

  await app.listen(3000);
}
bootstrap();
