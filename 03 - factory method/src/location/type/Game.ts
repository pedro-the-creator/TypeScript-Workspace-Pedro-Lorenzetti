import Iitem from "./interface/Iitem";

export default class Movie implements Iitem{
    start(): void {
        this.getDescripiton();
        console.log("Game Finalizando");
    }
    getDescripiton(): void {
        console.log("Game Iniciando");
    }
    
}