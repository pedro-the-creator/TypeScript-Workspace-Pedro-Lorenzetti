import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
    this.configureGame();
    console.log("Xbox: Plataforma Configurada");
    }
    configureGame(): void {
    this.authToken();
    console.log("Xbox: Carregando o Jogo");
    }
    authToken(): void {
        console.log("Xbox: Autenticando Token");
    }
    
}