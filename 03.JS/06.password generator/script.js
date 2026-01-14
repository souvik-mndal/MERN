let range = document.querySelector("#range")
let p = document.querySelector("#showPass")
let inputShow = document.querySelector("#inputValueShow")
let capital = document.querySelector("#capitalLetters")
let small = document.querySelector("#smallLetters")
let digits = document.querySelector("#digits")
let symbol = document.querySelector("#symbols")
let generate = document.querySelector("#generate")
let copy = document.querySelector("#copy")

range.addEventListener("input",(e)=>{
    inputShow.innerText = e.target.value
})

let isCapital = false;
let isSmall = false;
let isDigit = false;
let isSymbol = false;



let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let sml = "abcdefghijklmnopqrstuvxyz"
let dig = "01234564789"
let sym = "!@#$%^&*"

generate.addEventListener("click",(e)=>{
    let total = ""
    if( capital.checked ){
        isCapital = true
        total += cap
    }
    if( small.checked ){
        isSmall = true
        total += sml
    }
    if( digits.checked ){
        isDigit = true
        total += dig
    }
    if( symbol.checked ){
        isSymbol = true
        total += sym
    }
    let ans = ""
    for( let i=0 ; i<range.value ; i++ ){
        let r = Math.floor(Math.random()*(total.length-1)+1)
        ans += total.charAt(r)
        console.log(r);
    }
    p.innerText = ans;
    console.log(ans);
})

copy.addEventListener("click",(e)=>{
    alert("Password Copied")
    window.navigator.clipboard.writeText(p.innerText)
})