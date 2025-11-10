function outer(){
    let age = 20
    function inner(){
        console.log(`The age is : ${age}`);
    }
    inner()
}
outer()