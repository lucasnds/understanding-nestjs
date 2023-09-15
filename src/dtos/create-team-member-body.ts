import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
  @IsNotEmpty() // fala que nao o atributo nao pode ser nulo e caso seja podemos passar status e message de forma personalizada
  @Length(5, 100) // define tamanho máximo e minino do atributo
  name: string;

  @IsNotEmpty({
   message: 'Erro personalizado'
  })
  function: string;
}
