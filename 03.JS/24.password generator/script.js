let range = document.querySelector("#range")
let h3 = document.querySelector("h3")
let h4 = document.querySelector("h4")
let capital = document.querySelector("#capital")
let small = document.querySelector("#small")
let digit = document.querySelector("#digits")
let symbol = document.querySelector("#symbols")
let create = document.querySelector("#create")
let copy = document.querySelector("#copy")

range.addEventListener("input",()=>{
    h4.innerText = range.value
})

const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const sml = "abcdefghijklmnopqrstuvwxyz"
const dig = "0123456789"
const sym = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

let rangeans = ""

function rndm(val){
    return Math.floor(Math.random()*(val))
}

create.addEventListener("click",(e)=>{
    let ans = ""
    if( capital.checked ){
        // console.log("cap");
        rangeans += cap
    }
    if( small.checked ){
        // console.log("small");
        rangeans += sml
    }
    if( digit.checked ){
        // console.log("digit");
        rangeans += dig
    }
    if( symbol.checked ){
        // console.log("symbol");
        rangeans += sym
    }
    // console.log(rangeans);
    for( let i=0 ; i<h4.innerText ; i++ ){
        // console.log(rangeans);
        let rndmrange = rndm(rangeans.length)
        ans += rangeans.charAt(rndmrange);
    }
    if( ans.length === 0 ){
        alert("please select some options")
    }
    h3.innerText = ans

    rangeans = ""
})

copy.addEventListener("click",(e) => {
    navigator.clipboard.writeText(h3.innerText)
})