let post = document.querySelector(".post-image")
let heart = document.querySelector("#heart")
let center = document.querySelector("#center")

var rot = 0;

post.addEventListener("dblclick",(e)=>{
    heart.style.color = "red"
    heart.setAttribute("class","ri-heart-3-fill")
    center.style.opacity = 1
    center.style.transform = "translate(-50%,-50%) rotate(0deg) scale(1)"
    rot++;
    setTimeout(() => {
        center.style.transform = "translate(-50%,-250%) rotate(0deg) scale(1)"
    }, 440);
    setTimeout(() => {
        center.style.opacity = 0
    }, 700);
    setTimeout(() => {
        center.style.transform = "translate(-50%,-50%) rotate(-45deg) scale(0)";
    }, 800);
})
heart.addEventListener("click",(e)=>{
    if( e.target.className == "ri-heart-3-fill"){
        heart.setAttribute("class","ri-heart-3-line")
        heart.style.color = "white"
    }
})