import IdeliveryFactory from "../deliveries/interface/IdeliveryFactory";
import Idrink from "../type/drink/interface/Idrink";
import Ifood from "../type/food/interface/Ifood"

export default class Client{
    private food : Ifood;
    private drink : Idrink;

    constructor(factory : IdeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery() : void {
        this.food.startDelivery();
        this.drink.startDelivery();
    }
}