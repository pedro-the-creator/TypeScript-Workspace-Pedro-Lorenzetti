import ICorreios from "../correios/ICorreios";
import Transporadora from "../transportadora/Transportadora";

export default class TransporadoraAdapter implements ICorreios{

    constructor(private transportadora : Transporadora){
        console.log("Adaptando transportadora nos correios");
    }
    sendCorreios() : void {
        return this.transportadora.sendTransporadora();
    }
    reciveCorreios(): void {
        return this.transportadora.reciveTransportadora();
    }
    
}