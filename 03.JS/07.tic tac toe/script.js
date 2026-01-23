let box = document.querySelectorAll(".box")
let result = document.querySelector("#result")
let restart = document.querySelector("#restart")

function check(){
    ans.forEach((row)=>{
        // console.log(box[row[0]].innerText,box[row[1]].innerText,box[row[2]].innerText);
        if( box[row[0]].innerText != "" && box[row[0]].innerText === box[row[1]].innerText && box[row[1]].innerText === box[row[2]].innerText){
            result.innerText = (`the winner is ${box[row[0]].innerText}`);
            box.forEach((b)=>{
                b.removeEventListener("click",clicking)
            })
        }
    })
}

let drawCount = 0

function clicking(e){
    if( e.target.innerText == "" ){
        e.target.innerText = cursor;
        check()
        ++drawCount;
        if( cursor == "X" ){
            cursor = "O";
        }
        else{
            cursor = "X"
        }
    }
    if( drawCount == 9 && result.innerText == "" ){
        result.innerText = `Match Draw`
    }
}

let cursor = "X";
box.forEach((b)=>{
    b.addEventListener("click",clicking)
})

restart.addEventListener("click",(e)=>{
    drawCount = 0
    box.forEach((b)=>{
        b.innerText = ""
    })
    result.innerText = ""
    box.forEach((b)=>{
        b.addEventListener("click",clicking)
    })
})

let ans = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,5],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]