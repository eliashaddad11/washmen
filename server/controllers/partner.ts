import HttpException from '../exceptions/HttpException';
import PartnerService from '../services/partner';

class PartnerCtrl  {
  
  partnerService=new PartnerService();

  // Get all partners by distance
  getAllByDistance = async (req, res,next) => {

    try {
      
      const maxdistance=req.params.maxdistance;
      const lat=req.params.lat;
      const lon=req.params.lon;
     
      
      if (!Number(lat) || !Number(lon) || !Number(maxdistance))
        throw new Error("Api inputs must be numberic");
      

      //call greatCircleDistance and return list of partners
      const result=await this.partnerService.getAllByDistance(maxdistance,lat,lon);

      return res.status(200).json(result);
    } 
    catch (err) {
      //return res.status(400).json({ error: err.message });
      return next(new HttpException(500,err.message));
    }
  }

}

export default PartnerCtrl;
