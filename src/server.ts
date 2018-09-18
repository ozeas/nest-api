import * as dotenv from "dotenv";
dotenv.config();

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ApplicationModule } from "./app.module";
import { DispatchError } from "./shared/filters/dispatch-error";

declare const module: any;

async function bootstrap(): Promise<any> {
    const app = await NestFactory.create(ApplicationModule);
    // app.useGlobalGuards(new RolesGuard());

    const options = new DocumentBuilder()
        .setTitle("AdSoft - API NestJs")
        .setDescription("Estrutura de api usada pela AdSoft com NodeJs")
        .setVersion("0.001")
        .addTag("adsoft-api")
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("api", app, document);

    app.useGlobalPipes(new ValidationPipe({
        dismissDefaultMessages: false,
        transform: true,
    }));
    await app.listen(3000);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();
