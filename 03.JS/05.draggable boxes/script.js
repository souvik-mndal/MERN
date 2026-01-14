let box = document.querySelectorAll(".box")
let parent1 = document.querySelector("#parent1")
let parent2 = document.querySelector("#parent2")

box.forEach((item)=>{
    item.addEventListener("dragstart",(e)=>{
        let data = e.target

        parent1.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        parent2.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })

        parent1.addEventListener("drop",()=>{
            parent1.append(data)
            data = ""
        })
        parent2.addEventListener("drop",()=>{
            parent2.append(data)
            data = ""
        })
    })
})