let mainone = document.querySelector("#div1")
let maintwo = document.querySelector("#div2")
let items = document.querySelectorAll(".box")

items.forEach((i) => {
    i.addEventListener("dragstart",(e)=>{
        // console.log(e.target.innerText);
        let it = e.target;
        maintwo.addEventListener("dragover",(e)=>{
            // maintwo.append(i)
            e.preventDefault()
            // e.stopPropagation()
            // console.log("over");
        })
        maintwo.addEventListener("drop",()=>{
            console.log(it);
            maintwo.append(it)
            // console.log(e.target);
            it = ""
        })
        
        
        mainone.addEventListener("dragover",(e)=>{
            // maintwo.append(i)
            e.preventDefault()
            // e.stopPropagation()
            // console.log("over");
        })
        mainone.addEventListener("drop",()=>{
            console.log(it);

            mainone.append(it)
            it = ""

            // console.log(e.target);
        })
    })
});

