//acessa o banco
//manipula banco
//pode ser interface ou classe abstrata
//vamos usar a classe abstrata nesse exemplo com nest pois quando o código typescript é compilado para javascript o compilador nao consegue entender o palavra chave "interface" já que algo do typescript entao perde alguns recursos 
export abstract class RocketMemebersRepository{
 abstract create(name: string, memberFunction: string): Promise<void>;
}
