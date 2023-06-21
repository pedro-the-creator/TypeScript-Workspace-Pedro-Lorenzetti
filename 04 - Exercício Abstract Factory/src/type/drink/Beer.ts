import Idrink from "./interface/Idrink";

export default class Beer implements Idrink{
    startDelivery(): void {
        this.getDeliery();
        console.log("enviando cerveja");
    }
    getDeliery(): void {
        console.log("preparando cerveja");
    }

}