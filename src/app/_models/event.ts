export class Event {

   constructor(
      public _id:number,
      public title:string,
      // date: Date,
      public date:string,
      public mainSpeakerId:string,
      public otherSpeakersId:string[],
      public studentsId:number[]

       
   ){}

}
