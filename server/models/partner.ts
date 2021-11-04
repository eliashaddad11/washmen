export default class Partner{
  id:number;
  urlName:string;
  organization:string;
  customerLocations:string;
  willWorkRemotely:boolean;
  website:string;
  services:string;
  offices:Office[];

}

class Office{
  location:string;
  address:string;
  coordinates:string;

}
