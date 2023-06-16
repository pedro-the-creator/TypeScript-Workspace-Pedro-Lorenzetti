import ITransportFactory from "../transports/interface/ITransportFactory";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

constructor(factory: ITransportFactory){
    this.vehicle = factory.createTransportAircraft();
    this.aircraft = factory.createTransportAircraft();
}

startRoute() : void{
    this.vehicle.startRoute();
    this.aircraft.startRoute();
}

}