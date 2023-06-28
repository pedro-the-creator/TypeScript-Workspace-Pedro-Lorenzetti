import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../produtos/Sanduiche";

export default interface IBuilder{
    reset() : void;
    getSanduiche() : Sanduiche;
    addSauce(sauce : Sauce);
    setSanduicheType(value : SanduicheType);
    setBread(bread : Bread);
    setProtein(protein : Protein);
    setSalada(salad : Salad);
    
}