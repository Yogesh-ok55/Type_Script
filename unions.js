var score = 33; //keep strict as much as possible
score = "55";
var yogesh = { name: "yogesh", id: 1234 };
yogesh = { username: "yogesh", id: 1234 };
function getDbId(id) {
    if (typeof id == "string") {
        id.toLowerCase();
    }
    console.log("Db id is: ".concat(id));
}
getDbId(3);
getDbId("3");
//array
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3", "4"];
var data2 = ["1", "2", "3", "4", 5];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
