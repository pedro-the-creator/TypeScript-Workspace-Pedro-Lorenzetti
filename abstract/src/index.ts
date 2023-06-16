import Client from "./clients/Client";
import NineNineTransport from "./transports/NIneNineTransport";
import UberTransport from "./transports/UberTransport";
import Company from "./transports/consts/company";
import ITransportFactory from "./transports/interface/ITransportFactory";

const currentCompany = Company.UBER;
let factory! : ITransportFactory;

switch(currentCompany){
case Company.UBER:
factory = new UberTransport();
break;
case Company.NINENINE:
factory = new NineNineTransport();
break;
default:
console.log("Companhia não definida");
}
const client = new Client(factory);
client.startRoute();