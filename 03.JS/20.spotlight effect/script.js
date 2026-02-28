let overlay = document.querySelector("#overlay")

overlay.addEventListener("mousemove",(e)=>{
    console.log(e.x ,e.y);
    document.body.style.setProperty("--x",e.x+"px")
    document.body.style.setProperty("--y",e.y+"px")
})