let h1 = document.querySelector("h1")
const charecter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0;
let text = h1.innerText

h1.addEventListener("mouseenter",(e)=>{
    let sett = setInterval(()=>{
        let str = text.split('').map((char,i)=>{
            if( iteration > i ){
                return char
            }
            return charecter[Math.floor(Math.random() * (charecter.length - 0 + 1 ) + 0 )]
        }).join('')
        h1.innerText = str
        iteration += .125
        console.log(iteration);
        if( iteration > text.length ){
            clearInterval(sett)
            iteration = 0
        }
    },30)
})