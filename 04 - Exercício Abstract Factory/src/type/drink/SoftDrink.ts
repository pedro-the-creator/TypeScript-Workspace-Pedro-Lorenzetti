import Idrink from "./interface/Idrink";

export default class SoftDrink implements Idrink{
    startDelivery(): void {
        this.getDeliery();
        console.log("enviando drink");
    }
    getDeliery(): void {
        console.log("preparando drink");
    }

}