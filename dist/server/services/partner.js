"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs");
const path = require("path");
const greatcircledistance_1 = require("../services/greatcircledistance");
class PartnerService {
    constructor() {
        this.distancelengthService = new greatcircledistance_1.default();
        this.getAllByDistance = (maxdistance, lat, lon) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            //Read data from partner.json
            let rawdata = fs.readFileSync(path.join(__dirname, '..', 'data', 'partners.json'));
            let partners = JSON.parse(rawdata.toString());
            //
            const finalResult = [];
            try {
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
                        const distanceInKm = this.distancelengthService.greatCircleDistance(coords);
                        if (distanceInKm <= maxdistance) {
                            if (!finalResult.find(e => e.id == partner.id))
                                finalResult.push({ 'id': partner.id, 'organization': partner.organization, 'offices': [] });
                            finalResult[finalResult.findIndex(e => e.id == partner.id)].offices.push({ 'address': el.address, 'distance': distanceInKm });
                        }
                    });
                });
                return finalResult.sort((a, b) => 0 - (a.organization > b.organization ? -1 : 1));
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = PartnerService;
//# sourceMappingURL=partner.js.map