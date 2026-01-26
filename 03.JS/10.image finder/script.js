let name = document.querySelector("#name")
let search = document.querySelector("#search")
let main = document.querySelector("#main")
let more = document.querySelector("#more")

const ACCESS_TOKEN = 'QtrEP0lP9hR3JuTzWG8GuyaN8W-nFo06Td9g7_LOk0M'
let page;
async function api(name,page){
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${name}&client_id=${ACCESS_TOKEN}&page=${page}`)
    let result = await response.json()
    let desc;
    result.results.forEach((items)=>{
        if(items.description === null ){
            desc = items.alt_description
        }
        else{
            desc = items.description
        }
        console.log(items);
        let div = document.createElement("div")
        div.setAttribute("class","insta-card")
        div.innerHTML = `
            <div class="card-header">
            <img src=${items.user.profile_image.large} class="profile-pic" />
            <span class="username">${items.user.username}</span>
            </div>

            <div class="card-image">
            <img src=${items.urls.regular} />
            </div>

            <div class="card-desc">
            <span class="username">${items.user.name}</span>
            ${desc}
            </div>
        `
        main.append(div)
    })
}
let searching;
search.addEventListener("click",(e)=>{
    page=1
    searching = name.value
    // console.log(arr.results);
    main.innerHTML = ""
    api(name.value,page)
    name.value = ""
    
})
more.addEventListener("click",(e)=>{
    page+=1;
    api(searching,page)
})
