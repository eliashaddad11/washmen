import * as express from 'express';
import PartnerCtrl from './controllers/partner';

function setRoutes(app): void {
  const router = express.Router();
  const partnerCtrl = new PartnerCtrl();
  
  // Partners
  router.route('/partners/list/:maxdistance/:lat/:lon').get(partnerCtrl.getAllByDistance);
  
  
  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
