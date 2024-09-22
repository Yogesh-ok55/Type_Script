const score: Array<number> = []//hidden generic in array
const Name: Array<string> = []

function identityOne(val: boolean | number ): boolean | number {
    return val;
}


//not a healthy practise brother
function identityTwo(val : any){//ho sakta hn Number enter hua
    return val;// and string output ho rahi ho
}


function identityThree<Type>(val: Type): Type{//same value which entered
   return val;// need to be returned
}

identityThree(3);
identityThree("3");

function identityFour<T>(val:T):T{
    return val;
}

identityFour(true)

interface Bootle {
    brand: string,
    type:number
}

// identityFour<Bootle>({})//if we want to use our own data type than need to use this syntax


function getSearchProducts<T>(products: T[]):T{
   //do some databse operations
   const myIndex=3;
    return products[3];
}

const getMoreSearchProducts = <T>(products : T[]):T=>{
  // do some database opeerations
  const myIndex=4;
  return products[myIndex];
} 


interface database{
    connection : string,
    username : string ,
    password : string
}

function anotherFunction <T, U extends database> (one:T,two:U):object {
   return {
    one,
    two
   }
}

// anotherFunction(2,{})

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name: string,
    author : string ,
    subject : string
}

class Sellable <T> {
    public cart: T[]=[]

    addToCart(products: T){
        this.cart.push(products)
    }
}