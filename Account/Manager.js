"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./Account");
var LoanAccount_1 = require("./LoanAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var TravelAccount_1 = require("./TravelAccount");
var myAccount = new Account_1.Account("C101", "Dora");
console.log(myAccount.getInfo());
var myLoanAccount = new LoanAccount_1.LoanAccount("C102", "Raja", 10000, 15);
var mySavingsAccount = new SavingsAccount_1.SavingsAccount("C103", "Rena", 50000, 10);
var myTravelAccount = new TravelAccount_1.TravelAccount("C104", "Anna", 5000, 1000, true);
var theAccounts = [];
theAccounts.push(myLoanAccount);
theAccounts.push(mySavingsAccount);
theAccounts.push(myTravelAccount);
for (var _i = 0, theAccounts_1 = theAccounts; _i < theAccounts_1.length; _i++) {
    var tempShape = theAccounts_1[_i];
    console.log(tempShape.getInfo());
}
