import Ifood from "./interface/Ifood";

export default class HotDog implements Ifood{
    startDelivery(): void {
        this.getDelivery();
        console.log("enviando HotDog");
    }
    getDelivery(): void {
        console.log("preparando Hot Dog")
    }
    
}