import Idrink from "../../type/drink/interface/Idrink";
import Ifood from "../../type/food/interface/Ifood";

export default interface Idelivery{
    createDeliveryDrink(): Idrink;
    createDeliveryFood(): Ifood;
}