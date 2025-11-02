let cnt =0;
let arr = []
for( let i=0 ; i<5 ; i++ ){
    let val = prompt("give numeber : ")
    arr.push(val)
}
arr.forEach((val)=>{
    if(val > 0){
        cnt++;
    }
})
console.log(`the total positive numbers are : ${cnt}`);