let obj = {
    "name":"SM",
    "age":20,
    "address":{
        "city":"Kolkata",
        "pin":712124
    }
}
function desc({name,age,address:{city,pin}}){
    console.log(`name is ${name} age is ${age} lives in ${city} and its pin is ${pin}`);
}
desc(obj)