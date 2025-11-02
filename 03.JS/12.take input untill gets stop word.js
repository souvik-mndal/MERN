let cnt = 0;
let flag = true;
while( flag ){
    let val = prompt("gimme words : ")
    val= val.toLowerCase()
    if( val === "stop" ){
        console.log(`we have got total of yes ${cnt} times`);
        flag = false;
    }
    else if( val === "yes" ){
        cnt++;
        console.log(`got an yes`);
    }
    else{
        console.log(`waiting for the stop word`);
    }
}
