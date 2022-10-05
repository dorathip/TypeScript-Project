export class Account{
    constructor(private _cID:string,private _cName:string){

    }

    public get cID():string {

        return this._cID;
    }
    public set cID(value:string){
        this._cID = value;
    }


    public get cName():string {

        return this._cName;
    }
    public set cName(value:string){
        this._cName = value;
    }



    getInfo():string{
        return `CID=${this._cID},CName=${this._cName}`;
    }

}
        