import { Account } from "./Account";

export class TravelAccount extends Account{


    
    constructor(theCID:string,theCName:string,private _travelAmount:number,private _travelInsurence:number,private _travelVisa:boolean){
        super(theCID,theCName);
    }



    public get travelAmount():number{
        return this._travelAmount;
   }
   public set travelAmount(value:number){
       this._travelAmount= value;
   }
   public get travelInsurenc():number{
    return this._travelInsurence;
   }
   public set travelInsurenc(value:number){   
   this._travelInsurence = value;

   }

   public get travelVisa():boolean{
    return this._travelVisa;
   }
   public set travelVisa(value:boolean){   
   this._travelVisa= value;
   }

   getInfo():string{
       return super.getInfo() + `,Travel Amount=$${this._travelAmount},Travel Insurence=$${this._travelInsurence},Travel visa status=${this._travelVisa}`;
   }
}