import TransporadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreios from "./correios/ICorreios";
import Transporadora from "./transportadora/Transportadora";

const enviando : ICorreios = new TransporadoraAdapter(new Transporadora());
enviando.sendCorreios();
enviando.reciveCorreios();