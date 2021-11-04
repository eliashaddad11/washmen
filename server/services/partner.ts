import Partner from "models/partner";
import * as fs from 'fs';
import * as path from 'path';
import DistancelengthService from '../services/greatcircledistance';


class PartnerService
{
    
    distancelengthService=new DistancelengthService();

    getAllByDistance=async(maxdistance:number,lat:number,lon:number)=>{


        //Read data from partner.json
        let rawdata = fs.readFileSync(path.join(__dirname, '..','data','partners.json'));

        let partners:Partner[] = JSON.parse(rawdata.toString());
        //
        const finalResult=[];   
        
        try 
        {
            //for each partner
            partners.forEach(partner => {

                //for each office for partner
                partner.offices.forEach(el => {
                    
                    const coords = {
                        lat1: lat,
                        lon1: lon,
                        lat2: el.coordinates.split(',')[0],
                        lon2: el.coordinates.split(',')[1]
                    };

                    const distanceInKm=this.distancelengthService.greatCircleDistance(coords);

                    if(distanceInKm<=maxdistance)
                    {
                        if(!finalResult.find(e=>e.id==partner.id))
                            finalResult.push({'id':partner.id,'organization':partner.organization,'offices':[]});

                        finalResult[finalResult.findIndex(e=>e.id==partner.id)].offices.push({'address':el.address,'distance':distanceInKm});
                    }

                });

            });
            
            return finalResult.sort((a, b) =>0 - (a.organization > b.organization ? -1 : 1));
        } 
        catch (error) {
            return error;
        }
        
    }
    
}

export default PartnerService