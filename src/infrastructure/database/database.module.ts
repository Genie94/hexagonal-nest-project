import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER_NAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        logging: true,
        // dropSchema: true,
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        entities: [
          __dirname
            .split('/')
            .filter((i) => i !== 'infrastructure' && i !== 'database')
            .join('/') + '/**/*.entity{.ts,.js}',
        ],
        synchronize: configService.get('DB_SYNC'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
