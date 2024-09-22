function add(num:number){
    // num.toUpperCase//as num is any so no error
    return num+2;
}

add(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("yogi");

function signUpUser(name:string,email:string,pass:number=1234){

}

signUpUser("yogesh","yo@com");

//return type in function

function solve(num:number):number{
    return num;  
}

//what we can do when we can return more than 1 value either string or boolean

solve(5)

const getHello = (s:string):string=>{
    return ""
}

const hero =["yogi","rogi","hogi"];

hero.map((hero):string=>{//automatically detect datatype
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
         console.log(errmsg) 
}

function handleError(errmsg:string):never{
         throw new Error(errmsg)
}

export {};