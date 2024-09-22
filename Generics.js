var score = []; //hidden generic in array
var Name = [];
function identityOne(val) {
    return val;
}
//not a healthy practise brother
function identityTwo(val) {
    return val; // and string output ho rahi ho
}
function identityThree(val) {
    return val; // need to be returned
}
identityThree(3);
identityThree("3");
function identityFour(val) {
    return val;
}
identityFour(true);
// identityFour<Bootle>({})//if we want to use our own data type than need to use this syntax
