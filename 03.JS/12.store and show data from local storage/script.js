let main = document.querySelector("#main")
let add = document.querySelector("#add")
let name = document.querySelector("#name")
let roll = document.querySelector("#roll")

add.addEventListener("click",(e)=>{
    let n = name.value
    let r = roll.value
    localStorage.setItem("data" , JSON.stringify({name:n,roll:r}))

    let show = JSON.parse(localStorage.getItem("data"))
    // console.log(show);
    let n1 = document.createElement("h2")
    n1.innerText = show.name
    let n2 = document.createElement("h2")
    n2.innerText = show.roll
    main.append(n1)
    main.append(n2)
})

