import ICorreios from "./ICorreios";


export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Enviando pacote pelo correio");
    }
    reciveCorreios() : void{
        console.log("Recebendo pacote pelo correio");
    }

}