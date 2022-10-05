import { Account } from "./Account";

export class LoanAccount extends Account{

    constructor(theCID:string,theCName:string,private _loanAmount:number,private _interestRate:number){
        super(theCID,theCName);
    }



    public get loanAmount():number{
        return this._loanAmount;
   }
   public set loanAmount(value:number){
       this._loanAmount = value;
   }
   public get interestRate():number{
    return this._interestRate;
   }
   public set interestRate(value:number){   
   this._interestRate = value;

   }
   getInfo():string{
       return super.getInfo() + `,Loan Amount=$${this._loanAmount},Interest Rate=${this._interestRate}%`;
   }

}