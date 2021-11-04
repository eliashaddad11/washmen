class DistancelengthService 
{
    
      Pie = Math.PI;// The constant Pie is define As Math.PI

      RADIUS_OF_EARTH = 6371e3;//Approximated Radius of the Earth meters

      private getRadians = coordinate => {
        return (coordinate * this.Pie) / 180;
      };

      public greatCircleDistance =options => {
        const { lat1, lon1, lat2, lon2 } = options;
      
        

        const φ1 = this.getRadians(lat1);
        const φ2 = this.getRadians(lat2);
        const Δφ = this.getRadians(lat2 - lat1);
        const Δλ = this.getRadians(lon2 - lon1);
        

        /*
         * This uses Havershine's formula
         */
        const a =
          Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

        const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        
        const c = this.RADIUS_OF_EARTH * b;
      
        
        // distance in kms.
        return c / 1000;

      };
      
    
}

export default DistancelengthService;

