import Beer from "../type/drink/Beer";
import Idrink from "../type/drink/interface/Idrink";
import Hamburguer from "../type/food/Hamburguer";
import Ifood from "../type/food/interface/Ifood";
import IdeliveryFactory from "./interface/IdeliveryFactory";

export default class IAiqfomeDElivery implements IdeliveryFactory{
    createDeliveryDrink(): Idrink {
        return new Beer();
    }
    createDeliveryFood(): Ifood {
        return new Hamburguer;
    }
    
}