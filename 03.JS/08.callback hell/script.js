function searchFood(food , cb1){
    console.log(`Searching started for food ${food}`);
    setTimeout(()=>{
        let data = `list of ${food}`
        cb1(data , food)
    },3000)
}

function orderFood(food , cb2){
    console.log(`${food} selected`);
    setTimeout(() => {
        let id = 213456;
        cb2(id)
    }, 3000);
}

function payment(food ,id , cb3){
    console.log(`payment started for ${food} with id ${id}`);
    setTimeout(() => {
        let res = true;
        cb3(res)
    }, 4000);
}

searchFood("Biriyani",(data , food)=>{
    console.log(data);
    orderFood(food , (id)=>{
        console.log(`Order for ${food} generated with the ID ${id}`);
        payment(food,id,(res)=>{
            console.log(`payment ended successfully with response ${res}`);
        })
    })
})