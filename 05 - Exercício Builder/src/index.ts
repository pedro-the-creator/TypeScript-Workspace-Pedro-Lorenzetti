import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./produtos/Sanduiche";


const builder : SanduicheBuilder = new SanduicheBuilder;
const director : Director = new Director(builder);

director.constructHotDog();
const HotDog : Sanduiche = builder.getSanduiche();
imprimindoDetalhes(HotDog);
director.constructHamburguer();
const X_Salada : Sanduiche = builder.getSanduiche();
imprimindoDetalhes(X_Salada);


function imprimindoDetalhes(sanduiche : Sanduiche){
    console.log("Construindo Sanduiche :" + sanduiche.sanduicheType);
    console.log("Pão Usado: " + sanduiche.bread);
    console.log("Proteína Usada: " + sanduiche.protein);
    console.log("Salada Usada: " + sanduiche.salad);
    console.log("Molho Utilizado: " + sanduiche.sauce[0].tipoMolho);
    console.log("Molho Utilizado: " + sanduiche.sauce[1].tipoMolho);
}