import Iitem from "./type/interface/Iitem";

export default abstract class Location{
    startItem(): void{
        const type = this.createItem();
        type.start();
    }
    protected abstract createItem(): Iitem;
    }