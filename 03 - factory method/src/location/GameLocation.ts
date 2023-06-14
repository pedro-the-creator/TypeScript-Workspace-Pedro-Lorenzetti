import Iitem from "./type/interface/Iitem";
import Location from "./Location";
import Game from "./type/Game";

export default class GameLocation extends Location{
    protected createItem(): Iitem{
        return new Game;
    }
}