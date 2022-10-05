"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(_cID, _cName) {
        this._cID = _cID;
        this._cName = _cName;
    }
    Object.defineProperty(Account.prototype, "cID", {
        get: function () {
            return this._cID;
        },
        set: function (value) {
            this._cID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "cName", {
        get: function () {
            return this._cName;
        },
        set: function (value) {
            this._cName = value;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.getInfo = function () {
        return "CID=".concat(this._cID, ",CName=").concat(this._cName);
    };
    return Account;
}());
exports.Account = Account;
