"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHandler = void 0;
var axios_1 = __importDefault(require("axios"));
var index_1 = require("../../index");
var helpers_1 = require("../../core/helpers");
var inversify_1 = require("inversify");
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
    AxiosHandler = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [])
    ], AxiosHandler);
    return AxiosHandler;
}());
exports.AxiosHandler = AxiosHandler;
//# sourceMappingURL=axios-handler.js.map