import ITransportadora from "./ITransportadora";

export default class Transporadora implements ITransportadora{
    sendTransporadora(): void {
        console.log("Enviando pacote pela transportadora");
    }
    reciveTransportadora() : void{
        console.log("Recebendo pacote pela transportadora");
    }

}