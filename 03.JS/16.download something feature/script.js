let download = document.querySelector(".download-btn")
let stats = document.querySelector(".status-text")
let progress = document.querySelector(".progress-fill")
let total = document.querySelector("#total")

download.addEventListener("click",(e)=>{
    e.target.style.pointerEvents = "none"
    download.innerText = "Downloading..."
    stats.innerText = "Preparing your download…"
    let percent =  0;
    setTimeout(()=>{
        stats.innerText = "Download in progress"
        let inter = setInterval(()=>{
            percent++;
            progress.style.width = `${percent}%`
            total.innerText = `${percent}%`
            if( percent == 100 ){
                clearInterval(inter)
                stats.innerText = "Downloaded successfully"
                download.innerText = "Downloaded"
                download.style.opacity = "0.55"
                const link = document.createElement("a");
                link.href = "Cant del Barca.mp3";
                link.download = "Cant del Barca.mp3";
                // document.body.appendChild(link);
                link.click();
                // document.body.removeChild(link);
            }
        },100)
    },3000)
})