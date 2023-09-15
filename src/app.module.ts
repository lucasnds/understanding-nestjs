import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMemebersRepository } from './repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prima-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController], // chamada de requisições http
  providers: [PrismaService,{ //providers é qualquer coisa
    provide: RocketMemebersRepository,// sempre que alguem acessar vai para a class use
    useClass: PrismaRocketMembersRepository,
  }], // qualquer coisa que não seja controller (repository, service...)
})
export class AppModule {}
