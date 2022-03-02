"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHandler = void 0;
var axios_1 = __importDefault(require("axios"));
var index_1 = require("../../index");
var helpers_1 = require("../../core/helpers");
var AxiosHandler = (function () {
    function AxiosHandler() {
    }
    AxiosHandler.prototype.request = function (apiRequestModel, sign, timestamp) {
        var axiosRequestHeader = {
            'X-Boomtown-Date': timestamp.toJSON(),
            'X-Boomtown-Token': index_1.Credential.token,
            'X-Boomtown-Signature': sign ? sign : '',
            Accept: apiRequestModel.formData ? 'multipart/form-data' : 'application/json',
        };
        var axiosRequestConfig = {
            url: "".concat(apiRequestModel.url).concat((0, helpers_1.detectQueryString)(apiRequestModel.url) ? '&' : '?', "_=").concat(timestamp.getTime()),
            data: apiRequestModel && apiRequestModel.body ? apiRequestModel.body : '',
            method: apiRequestModel.method,
            headers: axiosRequestHeader,
        };
        return axios_1.default.request(axiosRequestConfig);
    };
    return AxiosHandler;
}());
exports.AxiosHandler = AxiosHandler;
//# sourceMappingURL=axios-handler.js.map