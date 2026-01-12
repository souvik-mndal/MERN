let color = document.querySelector("#color")
let body = document.querySelector("body")
let submit = document.querySelector("#submit")

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    body.style.backgroundColor = color.value
})