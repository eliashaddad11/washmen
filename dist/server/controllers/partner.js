"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const partner_1 = require("../services/partner");
class PartnerCtrl {
    constructor() {
        this.partnerService = new partner_1.default();
        // Get all partners by distance
        this.getAllByDistance = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const maxdistance = req.params.maxdistance;
                const lat = req.params.lat;
                const lon = req.params.lon;
                if (!Number(lat) || !Number(lon) || !Number(maxdistance))
                    throw new Error("Api inputs must be numberic");
                //call greatCircleDistance and return list of partners
                const result = yield this.partnerService.getAllByDistance(maxdistance, lat, lon);
                return res.status(200).json(result);
            }
            catch (err) {
                //return res.status(400).json({ error: err.message });
                return next(new HttpException_1.default(500, err.message));
            }
        });
    }
}
exports.default = PartnerCtrl;
//# sourceMappingURL=partner.js.map