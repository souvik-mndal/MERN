const pass = "1234"
let tries = 0;

while( tries < 3 ){
    let val = prompt("gimme the password : ")
    if( val === pass ){
        console.log("access granted");
    }
    else{
        tries++;
        console.log("the password is incorrect");
        console.log(`You have ${3-tries} left`);
    }
}

console.error("all the tries are over , come after 24 hours");