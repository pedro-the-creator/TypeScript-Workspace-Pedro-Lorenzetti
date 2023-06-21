import IdeliveryFactory from "./deliveries/interface/IdeliveryFactory";
import Company from "./deliveries/consts/company"
import company from "./deliveries/consts/company";
import IfoodDelivery from "./deliveries/IfoodDelivery";
import IAiqfomeDElivery from "./deliveries/IAiqfomeDelivery";
import Client from "./clients/Client";

const CurrentCompany = Company.IFOOD;
let factory! : IdeliveryFactory;

switch(CurrentCompany){
    case company.IFOOD:
        factory = new IfoodDelivery();
        break;
    case company.AIQFOME:
        factory = new IAiqfomeDElivery();
    default:
        console.log("Nenhuma empresa foi definida");
}

const client = new Client(factory);
client.startDelivery();