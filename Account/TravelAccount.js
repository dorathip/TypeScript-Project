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
exports.TravelAccount = void 0;
var Account_1 = require("./Account");
var TravelAccount = /** @class */ (function (_super) {
    __extends(TravelAccount, _super);
    function TravelAccount(theCID, theCName, _travelAmount, _travelInsurence, _travelVisa) {
        var _this = _super.call(this, theCID, theCName) || this;
        _this._travelAmount = _travelAmount;
        _this._travelInsurence = _travelInsurence;
        _this._travelVisa = _travelVisa;
        return _this;
    }
    Object.defineProperty(TravelAccount.prototype, "travelAmount", {
        get: function () {
            return this._travelAmount;
        },
        set: function (value) {
            this._travelAmount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelAccount.prototype, "travelInsurenc", {
        get: function () {
            return this._travelInsurence;
        },
        set: function (value) {
            this._travelInsurence = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelAccount.prototype, "travelVisa", {
        get: function () {
            return this._travelVisa;
        },
        set: function (value) {
            this._travelVisa = value;
        },
        enumerable: false,
        configurable: true
    });
    TravelAccount.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ",Travel Amount=$".concat(this._travelAmount, ",Travel Insurence=$").concat(this._travelInsurence, ",Travel visa status=").concat(this._travelVisa);
    };
    return TravelAccount;
}(Account_1.Account));
exports.TravelAccount = TravelAccount;
