import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
    this.configureGame();
    console.log("PlayStation: Plataforma Configurada");
    }
    configureGame(): void {
    this.authToken();
    console.log("PlayStation: Carregando o Jogo");
    }
    authToken(): void {
        console.log("PlayStation: Autenticando Token");
    }
    
}