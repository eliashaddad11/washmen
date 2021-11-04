"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const tslib_1 = require("tslib");
const express = require("express");
const error_middleware_1 = require("./middleware/error.middleware");
const path = require("path");
const routes_1 = require("./routes");
const app = express();
exports.app = app;
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            routes_1.default(app);
            /*app.get('/*', (req, res) => {
              res.sendFile(path.join(__dirname, '../public/index.html'));
            });*/
            app.use(error_middleware_1.default);
            app.listen(app.get('port'), () => console.log(`Washmen Angular Full Stack listening on port ${app.get('port')}`));
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
//# sourceMappingURL=app.js.map