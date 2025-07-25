import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('NestMain');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api', {
    exclude: ['graphql'],
  });

  await app.listen(process.env.PORT || 3000, () => {
    logger.log(
      `Process started on port ${process.env.PORT || 3000} in ${
        process.env.NODE_ENV
      } environment.`,
    );
    if (process.env.NODE_ENV === 'development') {
      logger.debug(
        `GraphQL playground available at http://localhost:${
          process.env.PORT || 3000
        }/graphql`,
      );
    }
  });
}
bootstrap();
