let btn = document.querySelector("#changebtn")
// let inp = document.querySelector("#userinp")

function getRndm(){
    let value = Math.floor(Math.random() * 256)
    // console.log(value);
    return value
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector("body").style.backgroundColor = `rgb(${getRndm()},${getRndm()},${getRndm()})`
})
