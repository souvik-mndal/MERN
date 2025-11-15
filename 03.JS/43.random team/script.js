const iplTeams = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    primary_color: "Yellow",           // per Wikipedia / kit info :contentReference[oaicite:0]{index=0}  
    secondary_color: "Blue",            // from jersey descriptions :contentReference[oaicite:1]{index=1}  
    trophies: 5,                         // 5 IPL titles as per Business‑Standard :contentReference[oaicite:2]{index=2}  
    captain: "Ruturaj Gaikwad"           // for IPL 2025 :contentReference[oaicite:3]{index=3}  
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    primary_color: "Blue",               // as per Mumbai Indians page :contentReference[oaicite:4]{index=4}  
    secondary_color: "Gold",             // gold stripes / gold accent :contentReference[oaicite:5]{index=5}  
    trophies: 5,                         // 5 titles :contentReference[oaicite:6]{index=6}  
    captain: "Hardik Pandya"              // per 2025 captain list :contentReference[oaicite:7]{index=7}  
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    primary_color: "Purple",             // team colours purple & gold :contentReference[oaicite:8]{index=8}  
    secondary_color: "Gold",  
    trophies: 3,                         // 3 titles (2012, 2014, 2024) :contentReference[oaicite:9]{index=9}  
    captain: "Ajinkya Rahane"             // as per 2025 list :contentReference[oaicite:10]{index=10}  
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bengaluru",
    primary_color: "Red",                 // from jersey / colours: red & black :contentReference[oaicite:11]{index=11}  
    secondary_color: "Black",  
    trophies: 1,                         // they won their first IPL in 2025 :contentReference[oaicite:12]{index=12}  
    captain: "Rajat Patidar"              // as per news reports for 2025 :contentReference[oaicite:13]{index=13}  
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    primary_color: "Orange",              // colours orange & black :contentReference[oaicite:14]{index=14}  
    secondary_color: "Black",  
    trophies: 1,                         // SRH have won 1 IPL (2016) :contentReference[oaicite:15]{index=15}  
    captain: "Pat Cummins"                 // 2025 captain per their page :contentReference[oaicite:16]{index=16}  
  },
  {
    team: "GT",
    fullName: "Gujarat Titans",
    primary_color: "Navy Blue",            // from jersey descriptions :contentReference[oaicite:17]{index=17}  
    secondary_color: "Gold",               // gold thin lines as per kit info :contentReference[oaicite:18]{index=18}  
    trophies: 1,                         // they have won 1 (in 2022) :contentReference[oaicite:19]{index=19}  
    captain: "Shubman Gill"               // per 2025 captain list :contentReference[oaicite:20]{index=20}  
  },
  {
    team: "LSG",
    fullName: "Lucknow Super Giants",
    primary_color: "Blue",                 // colours blue & orange :contentReference[oaicite:21]{index=21}  
    secondary_color: "Orange",  
    trophies: 0,                         // as per their Wikipedia (no IPL wins) :contentReference[oaicite:22]{index=22}  
    captain: "Rishabh Pant"                 // 2025 captain :contentReference[oaicite:23]{index=23}  
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    primary_color: "Red",                  // per colour codes: red & blue :contentReference[oaicite:24]{index=24}  
    secondary_color: "Blue",  
    trophies: 0,                         // DC have not won an IPL title as of 2025 :contentReference[oaicite:25]{index=25}  
    captain: "KL Rahul"                    // per 2025 captain list :contentReference[oaicite:26]{index=26}  
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    primary_color: "Pink",                  // jersey colours pink & blue :contentReference[oaicite:27]{index=27}  
    secondary_color: "Blue",  
    trophies: 1,                         // RR won in 2008 :contentReference[oaicite:28]{index=28}  
    captain: "Sanju Samson"                // per their captains list :contentReference[oaicite:29]{index=29}  
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    primary_color: "Red",                   // older colour was red & silver, red is dominant :contentReference[oaicite:30]{index=30}  
    secondary_color: "Silver",  
    trophies: 0,                         // PBKS (formerly KXIP) have not won an IPL title :contentReference[oaicite:31]{index=31}  
    captain: "Shreyas Iyer"                 // per 2025 captain list :contentReference[oaicite:32]{index=32}  
  }
];


let btn = document.querySelector("#find")
let box = document.querySelector("#box")
let total = iplTeams.length
btn.addEventListener("click",()=>{
    let {team,fullName,primary_color,secondary_color,trophies,captain} = iplTeams[Math.floor(Math.random()*total)]
    box.innerHTML = `<h2>${team}</h2>
                    <h2>${fullName}</h2>
                    <h2>${trophies} - wins</h2>
                    <h2>${captain}(captian)</h2>`
    box.style.backgroundColor = `${primary_color}`
    box.style.color = `${secondary_color}`
})