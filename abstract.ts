abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter: string
    ){}

    abstract getSepia():void;

    getReelTime() : number {
        return 8;
    }
}
//Like kind of blue print
// no object can be made from abstract class

class Instagram extends TakePhoto {
   constructor(
    public cameraMode : string ,
    public filter : string,
   ){
    super(cameraMode,filter);
   }
   getSepia(): void {
       console.log("hello");
   }
}

const yc = new Instagram("test","test")


//difference between abstract and interface

// in interface you can only declare fun but in abstract you can only declare function 
//by mentioning the abstract keyword or can write body to it rest all are same