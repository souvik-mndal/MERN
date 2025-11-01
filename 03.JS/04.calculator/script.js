let btns = document.querySelectorAll("#buttons div");
let showing = document.querySelector("#showdata");
let equal = document.querySelector("#equal");
let ce = document.querySelector("#ce");

let isRad = true; // default mode: Radians
const radBtn = document.querySelector("#buttons div:nth-child(1)");
const degBtn = document.querySelector("#buttons div:nth-child(2)");

radBtn.addEventListener("click", () => {
    isRad = true;
    radBtn.classList.add("active-mode");
    degBtn.classList.remove("active-mode");
});

degBtn.addEventListener("click", () => {
    isRad = false;
    degBtn.classList.add("active-mode");
    radBtn.classList.remove("active-mode");
});

// Helper function: factorial
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

// Toggle between Rad and Deg
document.querySelectorAll("#buttons div")[0].addEventListener("click", () => {
    isRad = true;
    alert("Switched to Radians mode");
});
document.querySelectorAll("#buttons div")[1].addEventListener("click", () => {
    isRad = false;
    alert("Switched to Degrees mode");
});

// Clear screen
ce.addEventListener("click", () => {
    showing.innerText = "";
});

// Evaluate
equal.addEventListener("click", () => {
    try {
        let als = showing.innerText
            .replaceAll("÷", "/")
            .replaceAll("x", "*")
            .replaceAll("%", "/100")
            .replaceAll("√", "Math.sqrt")
            .replaceAll("log", "Math.log10")
            .replaceAll("ln", "Math.log")
            .replaceAll("power", "**")
            .replaceAll("π", "Math.PI")
            .replaceAll("e", "Math.E")
            .replaceAll("EXP", "*10**");

        // Handle trigonometric functions (depending on mode)
        als = als
            .replaceAll("sin", isRad ? "Math.sin" : "(x=>Math.sin(x*Math.PI/180))")
            .replaceAll("cos", isRad ? "Math.cos" : "(x=>Math.cos(x*Math.PI/180))")
            .replaceAll("tan", isRad ? "Math.tan" : "(x=>Math.tan(x*Math.PI/180))");

        // Handle factorial
        if (als.includes("!")) {
            als = als.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));
        }

        // Handle inverse (1/x)
        if (als.includes("inv")) {
            als = als.replace(/inv\(([^)]+)\)/g, "(1/($1))");
        }

        let result = eval(als);
        showing.innerText = result;
    } catch (err) {
        showing.innerText = "Error";
        console.error(err);
    }
});

// Button input
btns.forEach((val) => {
    val.addEventListener("click", (e) => {
        const text = e.target.innerText;

        if (text === "=" || text === "AC" || text === "Rad" || text === "Deg") return;

        if (text === "√" || text === "log" || text === "ln" || text === "tan" || text === "cos" || text === "sin" || text === "inv") {
            showing.innerText += text + "(";
        } 
        else if (text === "x!") {
            showing.innerText += "!";
        } 
        else if (text === "x^y") {
            showing.innerText += "power";
        } 
        else {
            showing.innerText += text;
        }
    });
});
