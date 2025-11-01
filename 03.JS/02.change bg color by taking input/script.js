let btn = document.querySelector("#changebtn")
let inp = document.querySelector("#userinp")

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let text = inp.value;
    if( text.trim() === ""){
        inp.value = "";
        alert("give some colors")
    }
    else{
        document.querySelector("body").style.backgroundColor = `${text}`
        // console.log(document.querySelector("body"));
        inp.value = "";
    }
})
