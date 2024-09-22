"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "yogesh",
    email: "yogi@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "yogesh", isPaid: true });
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: "rakesh", isPaid: false };
}
var newUSer = { name: "yogesh", isPaid: true, gmail: "yogi@gmail.com" };
createCourse(newUSer); //passing more parameters than arguments
