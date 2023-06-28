export default class Sauce{
    constructor(private _tipoMolho: String){}

    get tipoMolho() : String{
        return this._tipoMolho;
    }
    set tipoMolho(tipoMolho: String){
        this._tipoMolho = tipoMolho;
    }
}