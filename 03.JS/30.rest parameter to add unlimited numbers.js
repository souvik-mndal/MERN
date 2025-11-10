function add(...rest){
    sum = 0;
    rest.forEach((x)=>{
        sum+=x
    })
    console.log(`The sum is : ${sum}`);
}
add(1,2,3,4,5,6,7,8,9,10)