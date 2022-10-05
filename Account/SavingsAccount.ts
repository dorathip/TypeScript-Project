import { Account } from "./Account";

export class SavingsAccount extends Account{

    constructor(theCID:string,theCName:string,private _savingsAmount:number,private _savingsInterestRate:number){
        super(theCID,theCName);
    }



    public get savingsAmount():number{
        return this._savingsAmount;
   }
   public set savingsAmount(value:number){
       this._savingsAmount = value;
   }
   public get savingsInterestRate():number{
    return this._savingsInterestRate;
   }
   public set savingsInterestRate(value:number){   
   this._savingsInterestRate = value;

   }
   getInfo():string{
       return super.getInfo() + `,Savings Amount=$${this._savingsAmount},Savings Interest Rate=${this._savingsInterestRate}%`;
   }


}