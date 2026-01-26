function searchFood(food){
    let promise = new Promise((res,rej)=>{
        console.log(`Searching started for food ${food}`);
        setTimeout(() => {
            let data = `list of ${food}`
            res([data,food])
        }, 3000);
    })
    return promise
}



function orderFood(food){
    console.log(`${food} selected`);
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let id = 213456;
            res(id)
        }, 3000);
    })
}

function payment(food ,id ){
    console.log(`payment started for ${food} with id ${id}`);
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let r = true;
            res(`payment ended successfully with response ${r}`)
        }, 4000);
    })
}

async function foods(food){
    let list = await searchFood(food)
    console.log(list[0]);
    let id = await orderFood(list[1])
    let pay = await payment(list[1],id)
    console.log(pay);

}
foods("biriyani")