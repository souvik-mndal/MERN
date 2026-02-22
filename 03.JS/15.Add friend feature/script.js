let btn = document.querySelector(".follow-btn")

btn.addEventListener("click",(e)=>{
    if( e.target.innerText == "Follow" ){
        e.target.innerText = "Unfollow"
        e.target.style.backgroundColor = "gray"
    }
    else{
        e.target.innerText = "Follow"
        e.target.style.backgroundColor = "#0095f6"
    }
})