let score:number | string = 33 //keep strict as much as possible

score = "55";

type User ={
    name:string,
    id:number
}

type Admin = {
    username: string
    id: number
}

let yogesh : User | Admin = {name:"yogesh",id:1234}

yogesh = {username:"yogesh",id:1234}


function getDbId(id:number | string){
    if(typeof id=="string"){
        id.toLowerCase();
    }
    console.log(`Db id is: ${id}`);
}

getDbId(3)
getDbId("3")

//array

const data:number[]=[1,2,3,4]
const data1:string[]=["1","2","3","4"]
const data2:(string | number)[]=["1","2","3","4",5]

let pi:3.14 =3.14;

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
