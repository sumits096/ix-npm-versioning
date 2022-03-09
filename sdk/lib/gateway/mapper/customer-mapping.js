"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts_automapper_1 = __importDefault(require("ts-automapper"));
ts_automapper_1.default.create("customer")
    .map(function (src) { return src.id; }, function (dst) { return dst.id; })
    .map(function (src) { return src.name; }, function (dst) { return dst.name; })
    .map(function (src) { return src.nameLegal; }, function (dst) { return dst.name_legal; })
    .map(function (src) { return src.street1; }, function (dst) { return dst.street_1; })
    .map(function (src) { return src.street2; }, function (dst) { return dst.street_2; })
    .map(function (src) { return src.city; }, function (dst) { return dst.city; })
    .map(function (src) { return src.state; }, function (dst) { return dst.state; })
    .map(function (src) { return src.zipcode; }, function (dst) { return dst.zipcode; })
    .map(function (src) { return src.email; }, function (dst) { return dst.email; })
    .map(function (src) { return src.phone; }, function (dst) { return dst.phone; })
    .map(function (src) { return src.externalId; }, function (dst) { return dst.external_id; })
    .map(function (src) { return src.industry; }, function (dst) { return dst.industry; })
    .map(function (src) { return src.status; }, function (dst) { return dst.status; })
    .map(function (src) { return src.created; }, function (dst) { return dst.created; })
    .map(function (src) { return src.latitude; }, function (dst) { return dst.latitude; })
    .map(function (src) { return src.longitude; }, function (dst) { return dst.longitude; });
ts_automapper_1.default.create("customerModel")
    .map(function (src) { return src.id; }, function (dst) { return dst.id; })
    .map(function (src) { return src.name; }, function (dst) { return dst.name; })
    .map(function (src) { return src.name_legal; }, function (dst) { return dst.nameLegal; })
    .map(function (src) { return src.street_1; }, function (dst) { return dst.street1; })
    .map(function (src) { return src.street_2; }, function (dst) { return dst.street2; })
    .map(function (src) { return src.city; }, function (dst) { return dst.city; })
    .map(function (src) { return src.state; }, function (dst) { return dst.state; })
    .map(function (src) { return src.zipcode; }, function (dst) { return dst.zipcode; })
    .map(function (src) { return src.email; }, function (dst) { return dst.email; })
    .map(function (src) { return src.phone; }, function (dst) { return dst.phone; })
    .map(function (src) { return src.external_id; }, function (dst) { return dst.externalId; })
    .map(function (src) { return src.industry; }, function (dst) { return dst.industry; })
    .map(function (src) { return src.status; }, function (dst) { return dst.status; })
    .map(function (src) { return src.created; }, function (dst) { return dst.created; })
    .map(function (src) { return src.latitude; }, function (dst) { return dst.latitude; })
    .map(function (src) { return src.longitude; }, function (dst) { return dst.longitude; });
ts_automapper_1.default.create("customerRequest")
    .map(function (src) { return src.customer; }, function (dst) { return dst.customer; })
    .map(function (src) { return src.customerContact; }, function (dst) { return dst.customer_user; })
    .map(function (src) { return src.customerLocation; }, function (dst) { return dst.customer_location; });
ts_automapper_1.default.create("customerResponse")
    .map(function (src) { return src.results; }, function (dst) { return dst.results; });
//# sourceMappingURL=customer-mapping.js.map