let count = document.querySelector("h2")
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")

inc.addEventListener("click",()=>{
    let val = Number(count.innerText)
    count.innerText = val+1
})
dec.addEventListener("click",()=>{
    let val = Number(count.innerText)
    count.innerText = val-1
})

