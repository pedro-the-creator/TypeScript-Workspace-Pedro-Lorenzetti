import SoftDrink from "../type/drink/SoftDrink";
import Idrink from "../type/drink/interface/Idrink";
import HotDog from "../type/food/HotDog";
import Ifood from "../type/food/interface/Ifood";
import IdeliveryFactory from "./interface/IdeliveryFactory";

export default class IfoodDelivery implements IdeliveryFactory{
    createDeliveryDrink(): Idrink {
        return new SoftDrink();
    }
    createDeliveryFood(): Ifood {
        return new HotDog();
    }
    }