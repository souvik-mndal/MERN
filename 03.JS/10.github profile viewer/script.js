let name = document.querySelector("#name")
let search = document.querySelector("#search")
let main = document.querySelector("#main")

async function api(name){
    let response = await fetch(`https://api.github.com/users/${name}`)
    let result = await response.json()
    console.log(result);
    let bioo ;
    if( result.bio === null ){
        bioo = ""
    }
    else{
        bioo = result.bio;
    }
    if( result.status === "404" ){
        main.innerHTML = `User not found`
    }
    else{
        main.innerHTML = `
        <div id="looks">
                    <div id="img">
                        <img src=${result.avatar_url} alt="profile_photo">
                    </div>
                    <h2 id="name">${result.name}</h2>
                    <h3 id="bio">${bioo}</h3>
                </div>
                <div id="numbers">
                    <div id="vals">
                        <div class="shows">
                            <h3>Followers</h3>
                            <h2>${result.followers}</h2>
                        </div>
                        <div class="shows">
                            <h3>Following</h3>
                            <h2>${result.following}</h2>
                        </div>
                        <div class="shows">
                            <h3>Repos</h3>
                            <h2>${result.public_repos}</h2>
                        </div>
                    </div>
                    <a href=${result.html_url} target="_blank">
                        <button id="link">Visit Profile</button>
                    </a>
                </div>
            </div>
        `
    }
}

search.addEventListener("click",(e)=>{
    api(name.value)
})
