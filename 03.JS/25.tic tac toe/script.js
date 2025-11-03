let box = document.querySelectorAll(".box")
let main = document.querySelector("#main")
let h1 = document.querySelector("h1")
let button = document.querySelector("button")

let start = confirm("do ypu want to start with X ? ")
let val = null
if( start ){
    val = "X"
}
else{
    val = "O";
}

let ans = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]

let count = 0;

function startgame(e){
    e.stopPropagation()
    if( e.target.innerText === "" ){
        e.target.innerText = val
        count++;
        // console.log(count);
        ans.forEach((arr)=>{
            if( box[arr[0]-1].innerText !== "" && box[arr[1]-1].innerText !== "" && box[arr[2]-1].innerText !== "" ){
                if(box[arr[0]-1].innerText === box[arr[1]-1].innerText && box[arr[1]-1].innerText ===  box[arr[2]-1].innerText){
                    console.log("found");
                    box[arr[0]-1].classList.add("win")
                    box[arr[1]-1].classList.add("win")
                    box[arr[2]-1].classList.add("win")
                    h1.innerText = `The winner is : ${box[arr[0]-1].innerText}`
                    box.forEach(b => b.removeEventListener("click", startgame));
                }
            }
            console.log( box[arr[0]-1] , box[arr[1]-1] , box[arr[2]-1]);
        })
        val === "X"  ? val = "O" : val = "X";
        if( count === 9 && h1.innerText === ""){
            h1.innerText = "The game is a draw"
        }
    }
}
box.forEach((i) => {
    i.addEventListener("click", startgame)
})




button.addEventListener("click",(e)=>{
    box.forEach((val)=>{
        val.innerText = ""
        val.classList.remove("win")
    })
    h1.innerText = ""
    count = 0
    if( start ){
        val = "X"
    }
    else{
        val = "O";
    }
    box.forEach(b => b.addEventListener("click", startgame));
})












    // main.addEventListener("click",(e)=>{
    //     console.log(main);
    // })