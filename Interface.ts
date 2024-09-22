//
interface Iuser {
    readonly Dbid:number,
    email: string ,
    userId : number,
    googleId?:string,
    // startTrail : () => string
    startTrail():string
    getCoupon(couponname:string,value:number):number
}

interface Iuser{
    githubToken? : string
}//reopenining of the interface//inheritence

interface Iadmin extends User{
    role:"admin" | "learners"
}

const yoges : Iuser ={Dbid:11,email:"y@y.com",userId:2211,
    startTrail : () =>{
        return "trail Started"
    },
    getCoupon: (name:"yogesh",value:10) => {
        return 10;
    }
}
 

//interface vs tupple


