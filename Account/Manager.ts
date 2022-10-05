import { Account } from "./Account";
import { LoanAccount } from "./LoanAccount";
import { SavingsAccount } from "./SavingsAccount";
import { TravelAccount } from "./TravelAccount";



let myAccount = new Account("C101","Dora");
console.log(myAccount.getInfo());


let myLoanAccount = new LoanAccount("C102","Raja",10000,15);
let mySavingsAccount = new SavingsAccount("C103","Rena",50000,10);
let myTravelAccount = new TravelAccount("C104","Anna",5000,1000,true);



let theAccounts:Account[]=[];

theAccounts.push(myLoanAccount);
theAccounts.push(mySavingsAccount);
theAccounts.push(myTravelAccount);

for(let tempShape of theAccounts){

    console.log(tempShape.getInfo());
}