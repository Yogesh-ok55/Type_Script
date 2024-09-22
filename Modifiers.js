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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//both are same 
var Muser = /** @class */ (function () {
    function Muser(email, name, city) {
        if (city === void 0) { city = "Jaipur"; }
        this.email = email;
        this.name = name;
        this.city = city;
        this.val = 12;
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(Muser.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Muser.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Muser;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.val = 13;
        return _this;
    }
    Object.defineProperty(child.prototype, "getVal", {
        get: function () {
            return this.val;
        },
        enumerable: false,
        configurable: true
    });
    return child;
}(Muser));
var yog = new Muser("y@y.com", "yogesh");
var rak = new child("y@y.com", "yogesh");
console.log(rak.getVal);
//yog.city //not allowed outside the class
