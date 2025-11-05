function searchfood(food , cb ){
    console.log("Searching for food ");
    setTimeout(()=>{
        let data = `list of ${food}`
        cb(food , data )
    },3000)
}

function orderfood(food,cb1){
    console.log(`selected ${food}`)
    setTimeout(() => {
        let id = Math.floor(Math.random()*1000000)
        cb1(id)
    }, 2000);
}


function payfood(id , food , cb2){
    console.log(`the payment has been started for ${food} with ${id} as id`)
    setTimeout(() => {
        let status = true
        cb2(status)
    }, 5000);
}

let result = searchfood("biriyani",(food , data)=>{
    console.log(data);
    orderfood(food,(id)=>{
        console.log(`order created successfully with the id : ${id}`);
        payfood( id , food , (status)=>{
            console.log(`payment of food is successfull with status : ${status}`);
        })
    })
})