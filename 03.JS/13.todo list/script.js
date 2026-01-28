let task = document.querySelector("#task")
let add = document.querySelector("#add")
let showTasks = document.querySelector("#showTasks")

let all = JSON.parse(localStorage.getItem("data")) || []

function local(arr){
    localStorage.setItem("data",JSON.stringify(arr))
    showLocal()
}
function showLocal(){
    let arr = JSON.parse(localStorage.getItem("data"))
    showTasks.innerHTML = ""
    arr.map((v,i)=>{
        let div = document.createElement("div")
        div.setAttribute("class","singleTask")
        div.setAttribute("id",i)
        div.innerHTML = `
                    <input type="checkbox" id="check">
                    <h2>${v.task}</h2>
                    <button id="remove">remove</button>
        `
        let btn = div.getElementsByTagName("button")
        let inp = div.querySelector("#check")
        let txt = div.querySelector("h2")
        // console.log(btn[0]);
        if( v.complete ){
            inp.setAttribute("checked","true")
            txt.style.textDecoration = "line-through"
        }
        btn[0].addEventListener("click",(e)=>{
            // e.target.parentElement.remove()
            removeLocal(i)
        })
        btn[0].parentNode.firstElementChild.addEventListener("click",(e)=>{
            // e.target.nextSibling.classList.toggle("line")
            dash(i)
            e.target.nextElementSibling.classList.toggle("line")
        })
        
        showTasks.append(div)
    })
}
function removeLocal(id){
    all.map((val,i)=>{
        if( i == id ){
            // all.pop(all[id])
            all.splice(id,1)
            local(all)
            console.log(all);
        }
    })
}
function dash(id){
    if( all[id].complete == false ){
        all[id].complete = true 
    }
    else{
        all[id].complete = false
    }
    // console.log(all);
    // localStorage.setItem("data",JSON.stringify(all))
    local(all)
}



add.addEventListener("click",(e)=>{
    all.push({task:task.value,complete:false})
    // console.log(data);
    local(all)
    task.value = ""
})


showLocal()