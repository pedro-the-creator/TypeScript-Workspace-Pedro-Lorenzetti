import Iitem from "./interface/Iitem";

export default class Movie implements Iitem{
    start(): void {
        this.getDescripiton();
        console.log("Filme Finalizando");
    }
    getDescripiton(): void {
        console.log("Filme Iniciando");
    }
    
}