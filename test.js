let curry = require('./curry.min');
let mul = (a,b,c)=> a*b*c;

console.log(curry(mul)(1,2)()(3,3));