let arr = [1000,2000,3000]

let ans = arr.reduce((acc,curr)=>{
    return acc+=curr;
},0)
console.log(ans);