let btns = document.querySelectorAll("button")
let disp = document.querySelector(".display")

btns.forEach((vals)=>{
    vals.addEventListener('click',(e)=>{
        let sym = e.target.innerText
        if( sym === "="){
            let ans = disp.innerText.replaceAll("÷","/")
                                    .replaceAll("×","*")
                                    .replaceAll("−","-")
                                    .replaceAll("sinh(","Math.sinh(")
                                    .replaceAll("cosh(","Math.cosh(")
                                    .replaceAll("tanh(","Math.tanh(")
                                    .replaceAll("sin(","Math.sin(")
                                    .replaceAll("cos(","Math.cos(")
                                    .replaceAll("tan(","Math.tan(")
                                    .replaceAll("ln(","Math.log(")
                                    .replaceAll("log₁₀(","Math.log10(")
                                    .replaceAll("e","Math.E")
                                    .replaceAll("π","Math.PI")
                                    .replaceAll("EE","*10**")
                                    .replaceAll("^","**")
                                    .replaceAll("e^","Math.E**")
                                    console.log(ans);
            ans = eval(ans)
            // console.log(ans);
            disp.innerText = ans
        }
        else if( sym === "AC" ){
            disp.innerText = "0"
        }
        else if( sym === "sin" || sym === "cos" || sym === "tan" || sym === "tanh" || sym === "sinh" || sym === "cosh" || sym === "ln" || sym === "log₁₀"){
            if( disp.innerText === "0" ){
                disp.innerText = e.target.innerText + "("
            }
            else{
                disp.innerText = disp.innerText + e.target.innerText + "("
            }
        }
        else if( sym === "e" || sym === "π" || sym === "EE"){
            if( disp.innerText === "0" ){
                disp.innerText = e.target.innerText
            }
            else{
                disp.innerText = disp.innerText + e.target.innerText
            }
        }
        else if( sym === "10ˣ"){
            if( disp.innerText === "0" ){
                disp.innerText = "10^"
            }
            else{
                disp.innerText = disp.innerText + "10^"
            }
        }
        else if( sym === "eˣ"){
            if( disp.innerText === "0" ){
                disp.innerText = "e^"
            }
            else{
                disp.innerText = disp.innerText + "e^"
            }
        }
        else if( sym === "x²"){
            if( disp.innerText === "0" ){
                disp.innerText = "^2"
            }
            else{
                disp.innerText = disp.innerText + "^2"
            }
        }
        else if( sym === "x³"){
            if( disp.innerText === "0" ){
                disp.innerText = "^3"
            }
            else{
                disp.innerText = disp.innerText + "^3"
            }
        }
        else if( sym === "xʸ"){
            if( disp.innerText === "0" ){
                disp.innerText = "^"
            }
            else{
                disp.innerText = disp.innerText + "^"
            }
        }
        else if( sym === "²√x"){
            if( disp.innerText === "0" ){
                disp.innerText = "^"
            }
            else{
                disp.innerText = disp.innerText + "^"
            }
        }
        else{
            if( disp.innerText === "0" ){
                disp.innerText = e.target.innerText
            }
            else{
                disp.innerText = disp.innerText + e.target.innerText
            }    
        }
        // console.log(e.target.innerText);
    })
})