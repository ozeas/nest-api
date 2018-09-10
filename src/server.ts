import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { DispatchError } from './shared/filters/dispatch-error';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap(): Promise<any> {
    const app = await NestFactory.create(ApplicationModule);
    // app.useGlobalFilters(new DispatchError());
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        dismissDefaultMessages: false
    }));
    await app.listen(3000);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
