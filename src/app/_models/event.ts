export class Event {

   constructor(
      public _id:number,
      public title:string,
      // date: Date,
      public date:string,
      public mainSpeakerId:number,
      public otherSpeakersId:number[],
      public studentsId:number[]

       
   ){}

}
