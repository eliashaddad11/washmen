"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const partner_1 = require("./controllers/partner");
function setRoutes(app) {
    const router = express.Router();
    const partnerCtrl = new partner_1.default();
    // Partners
    router.route('/partners/list/:maxdistance/:lat/:lon').get(partnerCtrl.getAllByDistance);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map