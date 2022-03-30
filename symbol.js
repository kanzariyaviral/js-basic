var demo1 = Symbol("d1");
// console.log (s1);
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[demo1] = function () {
        return "some data";
    };
    return Demo;
}());
var d1 = new Demo();
console.log(d1[demo1]());
