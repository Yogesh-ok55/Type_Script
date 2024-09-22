function detectTypes(val) {
    if (typeof val === "string") { // type guards
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
//instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
// function getTrueShape(shape: shape){//giving errors
//     if(shape.kind==="circle"){
//         return Math.PI * shape.radius ** 2;
//     }
//     else{
//         return shape.side * shape.side;
//     } 
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default: //this is not going to be assigned just for future refernece if something added and not handled here it will give error
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}
