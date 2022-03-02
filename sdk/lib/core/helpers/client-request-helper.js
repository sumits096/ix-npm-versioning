"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectQueryString = exports.buildURL = exports.createQueryParameter = exports.createApiRequest = void 0;
function createApiRequest(url, httpMethod, payload, optionsModel, isFormData) {
    var queryParam = optionsModel ? createQueryParameter(optionsModel) : '';
    return {
        url: queryParam ? buildURL(url, queryParam) : url,
        method: httpMethod,
        body: payload,
        queryParameter: createQueryParameter(optionsModel),
        formData: isFormData ? isFormData : false
    };
}
exports.createApiRequest = createApiRequest;
function createQueryParameter(queryParameter) {
    var pairs = [];
    for (var key in queryParameter) {
        if (queryParameter.hasOwnProperty(key)) {
            if (queryParameter[key]) {
                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryParameter[key]));
            }
        }
    }
    return pairs.join('&');
}
exports.createQueryParameter = createQueryParameter;
function buildURL(url, queryParameter) {
    return "".concat(url, "?").concat(queryParameter ? queryParameter : '');
}
exports.buildURL = buildURL;
function detectQueryString(url) {
    var pattern = new RegExp(/\?.+=.*/g);
    return pattern.test(url);
}
exports.detectQueryString = detectQueryString;
//# sourceMappingURL=client-request-helper.js.map