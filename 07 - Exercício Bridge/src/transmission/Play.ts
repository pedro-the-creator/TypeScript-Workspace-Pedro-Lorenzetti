import IConsole from "../platforms/IConsole";
import ITransmission from "./ITransmission";

export default class Play implements ITransmission{
    
constructor(private platform : IConsole){

}
    playing(): void {
        console.log("Iniciando o Game");
    }
    result(): void {
        console.log("~~~~~~~GAME LIGADO~~~~~~~");
    }

    
}