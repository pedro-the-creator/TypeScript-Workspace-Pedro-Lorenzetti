import IBuilder from "../builders/Ibuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../produtos/Sanduiche";

export default class Director{

    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOT_DOG);
        this.builder.setBread(Bread.PAO_FRANCES);
        this.builder.setProtein(Protein.SALCICHA);
        this.builder.setSalada(Salad.TOMATE);
        this.builder.addSauce(new Sauce("mostarda"));
        this.builder.addSauce(new Sauce("pimenta"));
    }

    constructHamburguer(){
        this.builder.setSanduicheType(SanduicheType.X_SALADA);
        this.builder.setBread(Bread.PAO_HAMBUGUER);
        this.builder.setProtein(Protein.HAMBURGUER_BOVINO);
        this.builder.setSalada(Salad.ALFACE);
        this.builder.addSauce(new Sauce("maionese"));
        this.builder.addSauce(new Sauce("ketchup"));
    }
}