    let range = document.querySelector("#range")
    let show = document.querySelector("#show")

    range.addEventListener("input",(e)=>{
        e.preventDefault()
        show.innerText = e.target.value
    })
