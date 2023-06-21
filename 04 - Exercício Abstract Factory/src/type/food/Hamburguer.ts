import Ifood from "./interface/Ifood";

export default class Hamburguer implements Ifood{
    startDelivery(): void {
        this.getDelivery();
        console.log("enviando hambuguer");
    }
    getDelivery(): void {
        console.log("preparando hamburguer");
    }

}