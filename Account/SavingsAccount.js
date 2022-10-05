"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
var Account_1 = require("./Account");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(theCID, theCName, _savingsAmount, _savingsInterestRate) {
        var _this = _super.call(this, theCID, theCName) || this;
        _this._savingsAmount = _savingsAmount;
        _this._savingsInterestRate = _savingsInterestRate;
        return _this;
    }
    Object.defineProperty(SavingsAccount.prototype, "savingsAmount", {
        get: function () {
            return this._savingsAmount;
        },
        set: function (value) {
            this._savingsAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SavingsAccount.prototype, "savingsInterestRate", {
        get: function () {
            return this._savingsInterestRate;
        },
        set: function (value) {
            this._savingsInterestRate = value;
        },
        enumerable: false,
        configurable: true
    });
    SavingsAccount.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ",Savings Amount=$".concat(this._savingsAmount, ",Savings Interest Rate=").concat(this._savingsInterestRate, "%");
    };
    return SavingsAccount;
}(Account_1.Account));
exports.SavingsAccount = SavingsAccount;
