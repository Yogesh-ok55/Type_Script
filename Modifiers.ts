// class Muser {
//     //private(ts) or #(js ) same
//      email: string//by default public
//      name: string
//      private readonly city : string = "Jaipur"
//      constructor (email:string , name :string){
//         this.email=email;
//         this.name=name;
//      }
// }

//both are same 

class Muser {
    //private(ts) or #(js ) same
     private id:number;
     protected val=12
     constructor (
        public email:string , 
        public name :string,
        private readonly city : string = "Jaipur"){
        this.email=email;
        this.name=name;
     }

     set setId(id:number){
        this.id=id;
     }

     get getId():number{
        return this.id;
     }
}

class child extends Muser{
    
    protected val: number=13

    get getVal():number{
        return this.val;
    }
    
}

const yog = new Muser("y@y.com","yogesh")
const rak =new child("y@y.com","yogesh")

console.log(rak.getVal)
//yog.city //not allowed outside the class