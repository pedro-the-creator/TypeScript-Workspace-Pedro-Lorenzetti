import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";
import Location from "./location/Location";

declare var process;
let location: Location;

if(process.argv.includes("filme")){
    location = new MovieLocation
    location.startItem();
}else if(process.argv.includes("jogo")){
    location = new GameLocation
    location.startItem();
}else{
    console.log("não foi possivel abrir, as suas opção são iniciar jogo ou inciar filme");
}