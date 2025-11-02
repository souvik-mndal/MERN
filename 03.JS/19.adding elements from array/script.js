let ul = document.querySelector("ul")
console.log(ul);

let inputNames = [
  "Max Verstappen",
  "Lewis Hamilton",
  "Charles Leclerc",
  "Lando Norris",
  "George Russell",
  "Carlos Sainz",
  "Fernando Alonso",
  "Sergio Perez",
  "Oscar Piastri",
  "Daniel Ricciardo"
]

inputNames.forEach((val)=>{
    const insertedName = document.createElement("li")
    insertedName.innerText = val
    ul.append(insertedName)
})