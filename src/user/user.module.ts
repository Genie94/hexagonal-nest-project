import { Module } from '@nestjs/common';
//공통 모듈
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/infrastructure/config/config.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
//인프라 모듈
import { CreateAccountHandler } from './adaptor/in/handler/create-account.handler';
import { GetAccountHandler } from './adaptor/in/handler/get-account.handler';
import { GetAllAccountHandler } from './adaptor/in/handler/get-all-account.handler';
//핸들러 모듈
import { Account } from './adaptor/out/entity/account.entity';
import { Group } from './adaptor/out/entity/group.entity';
import { Profile } from './adaptor/out/entity/profile.entity';
//엔터티 모델
import { AccountRepository } from './adaptor/out/repository/account.repository';
import { GroupRepository } from './adaptor/out/repository/group.repository';
import { ProfileRepository } from './adaptor/out/repository/profile.repository';
//리포지토리 프로바이더
import { UserController } from './user.controller';
//컨트롤러

const repositories = [AccountRepository, GroupRepository, ProfileRepository];

const handlers = [
  CreateAccountHandler,
  GetAccountHandler,
  GetAllAccountHandler,
];

@Module({
  imports: [
    CqrsModule,
    ConfigModule,
    DatabaseModule,
    TypeOrmModule.forFeature([Account, Group, Profile]),
  ],
  controllers: [UserController],
  providers: [...repositories, ...handlers],
})
export class UserModule {}
