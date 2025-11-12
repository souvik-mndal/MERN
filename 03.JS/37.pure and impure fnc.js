function pure(a,b){
    console.log(a+b);
}
let global = 0
function impure(a){
    console.log(a + global++);
}
console.log("pure");
pure(1,2)
pure(1,2)
console.log("impure");
impure(2);
impure(2);