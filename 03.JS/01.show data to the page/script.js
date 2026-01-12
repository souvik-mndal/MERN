let parent = document.querySelector("#specs")
let arr = ["monitor","mouse","cpu","ram","storage","power supply"]

arr.forEach((i)=>{
    let val = document.createElement("li")
    val.innerText = i;
    val.style.fontSize = "24px"
    parent.append(val)
})