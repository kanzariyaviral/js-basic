/*
var add=4;
let addto = function(){
    var inner = 2;
  return inner+ add;  
};
console.dir(addto);*/

var addTo = function(pass){
    var add = function(inner){
        return pass + inner;
    };
    return add;
};
// console.log(addTo(3));
// console.log(addTo(4));
var addThree =new addTo(3);
var addFour = new addTo(4); 

console.log(addThree(1));
console.log(addFour(1));