function detectTypes(val:number | string){
    if(typeof val==="string"){// type guards
        return val.toLowerCase();
    }
    return val+3;
}

function provideId(id:string | null){
    if(!id){
        console.log("please provide id")
        return ;
    } 
    id.toLowerCase();
}


//instanceof
function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toLowerCase());
    }
}

//predicates

type Fish = {swim:()=> void};
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined 
}

function getFood(pet :Fish | Bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    }
    else{
        pet
        return "bird food"
    }
}

//discriminated unions

interface Circle {
    kind:"circle";
    radius:number;
}

interface square {
    kind:"square";
    side:number
}

interface Rectangle{
    kind:"rectangle"
    length:number,
    width:number
}

type shape =Circle | square | Rectangle //initially no rectangle

// function getTrueShape(shape: shape){//giving errors
//     if(shape.kind==="circle"){
//         return Math.PI * shape.radius ** 2;
//     }
//     else{
//         return shape.side * shape.side;
//     } 
// }

function getArea(shape:shape){//works fine
    switch(shape.kind){
        case "circle" :
            return Math.PI * shape.radius ** 2;
        case "square" :
            return shape.side * shape.side;
        case "rectangle" :
            return shape.length * shape.width;
        default ://this is not going to be assigned just for future refernece if something added and not handled here it will give error
            const _defaultforshape : never =shape
            return _defaultforshape
    }
}

