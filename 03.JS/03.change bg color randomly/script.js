let body = document.querySelector("body")
let submit = document.querySelector("#submit")

function randomColor(){
    let rndm = Math.floor( Math.random() * ( 255 - 0 ) + 1 ) + 0
    return rndm;
}

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let color = `rgb( ${randomColor()} , ${randomColor()} , ${randomColor()} )`
    console.log(color);
    body.style.backgroundColor = color;
})