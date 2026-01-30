let newNote = document.querySelector("#new-note")
let noteNum = document.querySelector("#noteNum")  
let leftA = document.querySelector("#leftA")  
let rightA = document.querySelector("#rightA")  
let allNotes = document.querySelector("#allNotes")  

let arr = JSON.parse(localStorage.getItem("data")) || []
let currentShow = 0;
let totalShow = 0;

function displayAll(){
    currentShow = 0
    allNotes.innerHTML = ``
    totalShow = arr.length
    arr.map((val,i)=>{
        if( val.current ){
            currentShow = i+1
            noteNum.innerText = i+1
            
            let div = document.createElement("div")
            div.setAttribute("class","note-box")
            div.setAttribute("id",i)
            div.innerHTML = `
                <div class="note-actions">
                    <button id="editBtn">Edit</button>
                    <button id="removeBtn" class="danger">Remove</button>
                </div>
            
                <div class="note-content">
                    <div id="showNote">${val.text}</div>
                    <textarea id="writeText"></textarea>
                </div>
            `
    
            let editBtn = div.querySelector("#editBtn")
            let removeBtn = div.querySelector("#removeBtn")
            let writeText = div.querySelector("#writeText")
            let showNote = div.querySelector("#showNote")
            writeText.value = val.text
            editBtn.addEventListener("click",(e)=>{
                if( e.target.innerText == "Edit"){
                    e.target.innerText = "Done"
                    showNote.style.display = "none"
                    writeText.style.display = "block"
                }
                else{
                    // console.log(writeText.value);
                    arr[i].text = writeText.value
                    set()
                    showNote.innerText = arr[i].text
                    e.target.innerText = "Edit"
                    showNote.style.display = "block"
                    writeText.style.display = "none"
                }
            })
            removeBtn.addEventListener("click",(e)=>{
                console.log(currentShow,totalShow);
                if( currentShow != 1 ){
                    arr.splice(currentShow-1,1)
                    currentShow--;
                    arr[currentShow-1].current = true
                }
                else if( currentShow == 1 && totalShow != 1 ){
                    // console.log("sd");
                    currentShow++;
                    arr[currentShow-1].current = true
                    arr.splice(currentShow-1,1)
                    console.log(currentShow);
                    console.log(arr);
                    // e.target.parentNode.parentNode.remove()
                }
                else if( currentShow == 1 && totalShow == 1 ){
                    arr.splice(currentShow-1,1)
                    currentShow--;
                }
                set()
                displayAll()
            })
            allNotes.append(div)
        }
    })
    if( totalShow == 0 ){
        allNotes.innerHTML = `<h2>No Todo Yet</h2>`
    }
}
displayAll()

function set(){
    localStorage.setItem("data",JSON.stringify(arr))
}

newNote.addEventListener("click",(e)=>{
    if( currentShow != 0 ){
        // console.log("curr",currentShow);
        let old = document.getElementById(`${currentShow-1}`)
        // console.log(old);
        arr[currentShow-1].current = false
        // console.log(arr);
        old.style.display = "none"
    }
    totalShow++;
    noteNum.innerText = totalShow
    currentShow = totalShow;
    let div = document.createElement("div")
    div.setAttribute("class","note-box")
    div.innerHTML = `
           <div class="note-actions">
             <button id="editBtn">Edit</button>
             <button id="removeBtn" class="danger">Remove</button>
           </div>
     
           <div class="note-content">
             <div id="showNote"></div>
             <textarea id="writeText"></textarea>
           </div>
    `
    let editBtn = div.querySelector("#editBtn")
    let writeText = div.querySelector("#writeText")
    let showNote = div.querySelector("#showNote")
    editBtn.addEventListener("click",(e)=>{
        if( e.target.innerText == "Edit"){
            e.target.innerText = "Done"
            showNote.style.display = "none"
            writeText.style.display = "block"
        }
        else{
            arr[currentShow-1].text = writeText.value
            // console.log(arr);
            showNote.innerText = writeText.value
            e.target.innerText = "Edit"
            showNote.style.display = "block"
            writeText.style.display = "none"
            set()
            displayAll()
        }
    })
    arr.push({text:'',current:true})
    // console.log(arr);
    set()
    allNotes.append(div)
    displayAll()
//     // console.log(div);
//     // totalNotes++;
//     // currentNote++;
//     // noteNum.innerText = totalNotes
})

leftA.addEventListener("click",(e)=>{
    if( currentShow == 1 ){
        currentShow = 1
        arr[0].current = true
    }
    else{
        arr[currentShow-1].current = false
        currentShow -= 1;
        arr[currentShow-1].current = true
        // console.log(arr);
    }
    noteNum.innerText = currentShow 
    set()
    displayAll()
})
rightA.addEventListener("click",(e)=>{
    if( currentShow == totalShow ){
        currentShow = totalShow
        arr[totalShow-1].current = true
    }
    else{
        arr[currentShow-1].current = false
        currentShow += 1;
        arr[currentShow-1].current = true
    }
    noteNum.innerText = currentShow 
    set()
    displayAll()
})


displayAll()