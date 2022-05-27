export class Speaker {
    constructor(
    //    public _id:number,
       public _id:String,
       public email:String,
       public username:string,
       public password:string,
       public city:string,
       public street:string,
       public building:string,
       public role :string

    ){}

}
// _id:mongoose.Types.ObjectId,
// email:{type:String,unique :true},
// username:String,
// password:String, 
// city: String, 
// street:String , 
// building:String