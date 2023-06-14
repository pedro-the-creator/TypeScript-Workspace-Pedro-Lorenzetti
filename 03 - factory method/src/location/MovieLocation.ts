import Iitem from "./type/interface/Iitem";
import Location from "./Location";
import Movie from "./type/Movie";

export default class MovieLocation extends Location{
    protected createItem(): Iitem{
        return new Movie;
    }
}