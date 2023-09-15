import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMemebersRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(
    private rocketMembersRepository: RocketMemebersRepository // controller dependente do reposotories agora pois toda a questao de db foi para lá
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body; 

    await this.rocketMembersRepository.create(name, memberFunction)

  }
}
