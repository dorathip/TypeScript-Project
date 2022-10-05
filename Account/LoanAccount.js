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
exports.LoanAccount = void 0;
var Account_1 = require("./Account");
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount(theCID, theCName, _loanAmount, _interestRate) {
        var _this = _super.call(this, theCID, theCName) || this;
        _this._loanAmount = _loanAmount;
        _this._interestRate = _interestRate;
        return _this;
    }
    Object.defineProperty(LoanAccount.prototype, "loanAmount", {
        get: function () {
            return this._loanAmount;
        },
        set: function (value) {
            this._loanAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoanAccount.prototype, "interestRate", {
        get: function () {
            return this._interestRate;
        },
        set: function (value) {
            this._interestRate = value;
        },
        enumerable: false,
        configurable: true
    });
    LoanAccount.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ",Loan Amount=$".concat(this._loanAmount, ",Interest Rate=").concat(this._interestRate, "%");
    };
    return LoanAccount;
}(Account_1.Account));
exports.LoanAccount = LoanAccount;
