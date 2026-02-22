const posts = [
  {
    username: "leo.messi",
    video : "./reels/vid1.mp4",
    totalLikes: 128934,
    totalComments: 4521,
    totalShare: 983,
    isLiked: true,
    isBookmarked: false,
    isFollowed: true,
    postCaption: "What a night! 🔥⚽"
  },
  {
    video : "./reels/vid2.mp4",
    username: "neymarjr",
    totalLikes: 98765,
    totalComments: 3210,
    totalShare: 756,
    isLiked: false,
    isBookmarked: true,
    isFollowed: false,
    postCaption: "Back on the pitch 😎"
  },
  {
    video : "./reels/vid3.mp4",
    username: "pedri",
    totalLikes: 54321,
    totalComments: 1890,
    totalShare: 412,
    isLiked: false,
    isBookmarked: false,
    isFollowed: true,
    postCaption: "Trust the process 💙❤️"
  },
  {
    video : "./reels/vid4.mp4",
    username: "gavi",
    totalLikes: 67890,
    totalComments: 2450,
    totalShare: 533,
    isLiked: true,
    isBookmarked: true,
    isFollowed: false,
    postCaption: "Midfield magic ✨"
  },
  {
    video : "./reels/vid5.mp4",
    username: "barca.fan",
    totalLikes: 23456,
    totalComments: 876,
    totalShare: 210,
    isLiked: false,
    isBookmarked: false,
    isFollowed: false,
    postCaption: "Visca el Barça! 🔴🔵"
  },
  {
    video : "./reels/vid6.mp4",
    username: "campnou.vibes",
    totalLikes: 45678,
    totalComments: 1320,
    totalShare: 301,
    isLiked: true,
    isBookmarked: false,
    isFollowed: true,
    postCaption: "Nothing beats this atmosphere 🏟️"
  },
  {
    video : "./reels/vid7.mp4",
    username: "football.edits",
    totalLikes: 112233,
    totalComments: 3890,
    totalShare: 990,
    isLiked: false,
    isBookmarked: true,
    isFollowed: true,
    postCaption: "Edit of the day 🎬⚡"
  },
  {
    video : "./reels/vid8.mp4",
    username: "ucl.nights",
    totalLikes: 76543,
    totalComments: 2109,
    totalShare: 640,
    isLiked: true,
    isBookmarked: false,
    isFollowed: false,
    postCaption: "Champions League energy 🌙⭐"
  },
  {
    video : "./reels/vid9.mp4",
    username: "goal.machine",
    totalLikes: 88901,
    totalComments: 2987,
    totalShare: 702,
    isLiked: false,
    isBookmarked: false,
    isFollowed: true,
    postCaption: "Goals speak louder than words 🥅"
  },
  {
    video : "./reels/vid10.mp4",
    username: "tiki.taka",
    totalLikes: 99812,
    totalComments: 3501,
    totalShare: 845,
    isLiked: true,
    isBookmarked: true,
    isFollowed: true,
    postCaption: "Pure tiki-taka football 💫"
  }
];

let reels = document.querySelector("#reels")

function liking(val){
    val.addEventListener("click",(e)=>{
        if(posts[e.target.parentNode.id].isLiked){
            e.target.className = "ri-heart-3-line"
            posts[e.target.parentNode.id].isLiked = false;
            posts[e.target.parentNode.id].totalLikes--;
        }
        else{
            e.target.className = "ri-heart-3-fill red"
            posts[e.target.parentNode.id].isLiked = true;
            posts[e.target.parentNode.id].totalLikes++;
        }
        reels.innerHTML = ""
        readAll()
    })
}

function bookmarking(val){
    val.addEventListener("click",(e)=>{
        if(posts[e.target.parentNode.id].isBookmarked){
            e.target.className = "ri-bookmark-line"
            posts[e.target.parentNode.id].isBookmarked = false;
        }
        else{
            e.target.className = "ri-bookmark-fill"
            posts[e.target.parentNode.id].isBookmarked = true;
        }
        reels.innerHTML = ""
        readAll()
    })
}

function connecting(val){
    val.addEventListener("click",(e)=>{
        if(posts[e.target.id].isFollowed){
            e.target.innerText = "Follow"
            posts[e.target.id].isFollowed = false
        }
        else{
            e.target.innerText = "Unfollow"
            posts[e.target.id].isFollowed = true
        }
        reels.innerHTML = ""
        readAll()
    })
}

// ⭐ NEW: video playback controller
function handleVideoPlayback() {
    const videos = document.querySelectorAll(".reel-parent video");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                video.play().catch(()=>{});
            } else {
                video.pause();
            }
        });
    }, {
        threshold: [0.6]
    });

    videos.forEach(video => observer.observe(video));
}

function readAll(){
    posts.forEach((ele,id)=>{
        let div = document.createElement("div")
        div.setAttribute("class","reel-parent")
        div.innerHTML = `
            <div id="cont">
                <video src=${ele.video} loop muted playsinline></video>
            </div>
            <div id="desc">
                <div id="detail">
                    <h3>${ele.username}</h3>
                    <button id="${id}">${ele.isFollowed?"Unfollow":"Follow"}</button>
                </div>
                <p>${ele.postCaption}</p>
            </div>
            <div id="stats">
                <div id="${id}" class="stt">
                    <i class="${ele.isLiked ? 'ri-heart-3-fill red' : 'ri-heart-3-line'}"></i>
                    <h3>${ele.totalLikes}</h3>
                </div>
                <div id="comment" class="stt">
                    <i class="ri-chat-1-line"></i>
                    <h3>${ele.totalComments}</h3>
                </div>
                <div id="share" class="stt">
                    <i class="ri-send-ins-line"></i>
                    <h3>${ele.totalShare}</h3>
                </div>
                <div id="${id}" class="stt">
                    <i class=${ele.isBookmarked ? "ri-bookmark-fill":"ri-bookmark-line"}></i>
                </div>
                <div id="more" class="stt">
                    <i class="ri-more-line"></i>
                </div>
            </div>
        `
        let sts = div.getElementsByClassName("stt")
        let btn = div.getElementsByTagName("button")

        bookmarking(sts[3].children[0]);
        liking(sts[0].children[0])
        connecting(btn[0]);

        reels.append(div)
    })

    // ⭐ VERY IMPORTANT
    handleVideoPlayback();
}

readAll();

reels.addEventListener("wheel",(e)=>{
    console.log(e);
})