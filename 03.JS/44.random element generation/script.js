const sentences = [
  "He missed an open goal.",
  "Their defense falls apart.",
  "The striker couldn’t score.",
  "They pass the ball.",
  "The goalie dives.",
  "Their teamwork disappears.",
  "He talks big.",
  "That shot had less power.",
  "They celebrate draws.",
  "The coach’s plan changes every time."
];


let btn = document.querySelector("#btn")
let main = document.querySelector("#main")
btn.addEventListener("click",()=>{
    let newData = document.createElement("h3")
    newData.innerText = sentences[Math.floor(Math.random()*sentences.length)]
    
    let scale = Math.ceil(Math.random()*3)
    let rotate = Math.floor(Math.random()*361)
    let one = Math.floor(Math.random()*256)
    let two = Math.floor(Math.random()*256)
    let three = Math.floor(Math.random()*256)
    let color = `rgb(${one},${two},${three})`
    let x = Math.floor(Math.random()*90)
    let y = Math.floor(Math.random()*90)

    newData.style.position = "absolute"
    newData.style.rotate = rotate+"deg"
    newData.style.color = color
    newData.style.scale = scale
    newData.style.left = x+"%"
    newData.style.right = y+"%"
    
    
    main.appendChild(newData)
    console.log(color);
})