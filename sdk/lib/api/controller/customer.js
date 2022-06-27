"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = (function () {
    function Customer(customerInterface) {
        this.customerInterface = customerInterface;
    }
    Customer.prototype.getAll = function () {
        return this.customerInterface.getAll();
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map