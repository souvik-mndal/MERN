// function add(...rest){
//     sum = 0;
//     rest.forEach((x)=>{
//         sum+=x
//     })
//     console.log(`The sum is : ${sum}`);
// }
function add(...rest){
    let ans = rest.reduce((acc,cur)=>{
        return acc += cur;
    },0)
    console.log(`The sum is : ${ans}`);
}
add(1,2,3,4,5,6,7,8,9,10)