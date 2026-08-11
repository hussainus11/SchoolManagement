import 'dotenv/config';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

// Always allowed so local dev works without touching FRONTEND_ORIGIN.
const DEV_ORIGINS = ['http://localhost:3000', 'http://localhost:3002'];

// FRONTEND_ORIGIN may be a single URL or a comma-separated list, so the same
// deployment can allow a production frontend plus deploy previews without
// editing env vars per environment.
function allowedOrigins(): string[] {
  const configured = (process.env.FRONTEND_ORIGIN ?? '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  return [...new Set([...configured, ...DEV_ORIGINS])];
}

async function bootstrap() {
  // rawBody: true lets the WhatsApp webhook controller verify Meta's X-Hub-Signature-256 header,
  // which must be computed over the exact bytes Meta sent, not the re-serialized parsed JSON.
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { rawBody: true });

  const origins = allowedOrigins();
  app.enableCors({
    origin: (origin, callback) => {
      // No Origin header means a same-origin or non-browser request (curl, health checks) — allow it.
      if (!origin || origins.includes(origin)) return callback(null, true);
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  });

  app.useStaticAssets(join(process.cwd(), 'uploads'), { prefix: '/uploads/' });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
