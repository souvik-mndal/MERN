
let flag = true;
while(flag){
    let val = prompt("get the number : ")
    val = Number(val)
    if( val%2==0 ){
        console.log("got the even number lets stop");
        flag = false
    }
    else{
        console.log("again asking...");
    }
}