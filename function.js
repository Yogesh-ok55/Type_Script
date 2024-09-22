"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    // num.toUpperCase//as num is any so no error
    return num + 2;
}
add(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("yogi");
function signUpUser(name, email, pass) {
    if (pass === void 0) { pass = 1234; }
}
signUpUser("yogesh", "yo@com");
//return type in function
function solve(num) {
    return num;
}
//what we can do when we can return more than 1 value either string or boolean
solve(5);
var getHello = function (s) {
    return "";
};
var hero = ["yogi", "rogi", "hogi"];
hero.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
