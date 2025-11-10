let person = {
    "name" : "SM",
    "age" : 20,
    "city" : "Kolkata"
}

// for( let obj in person ){
//     console.log(person[obj]);
// }

for ( let val of Object.values(person)){
    console.log(val);
}