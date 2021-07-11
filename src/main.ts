import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

declare const module: any;

async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'static', 'lib'), {
    index: false, 
    prefix: '/assets',
  });
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  
  app.setViewEngine('ejs');

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();