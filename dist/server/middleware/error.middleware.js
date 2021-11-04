"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorMiddleware(err, req, res, next) {
    let customError = err;
    /*if (!(err instanceof HttpException)) {
      customError = new HttpException(500,
        'Oh no, this is embarrasing. We are having troubles my friend'
      );
    }*/
    const status = customError.status || 500;
    const message = customError.message || 'Something went wrong';
    res
        .status(status)
        .send({
        status,
        message,
    });
}
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map