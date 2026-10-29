const gridContainer = document.createElement("div");
const gridSelectButton = document.createElement("button");
document.body.append(gridSelectButton, gridContainer);

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.width = "100vw";




gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.height = "100vh";
gridContainer.style.width = "1000px";
gridContainer.style.border = "3px solid black";


gridSelectButton.textContent = "SELECT GRID";
gridSelectButton.style.alignSelf = "center";
gridSelectButton.style.padding = "30px"
gridSelectButton.style.marginRight = "30px"
gridSelectButton.style.border = "none";
gridSelectButton.style.background = "#87CEEB";
gridSelectButton.style.borderRadius = "10px"

gridSelectButton.addEventListener("click", () => {  
    gridContainer.innerHTML = "";
    let gridInput = prompt("Enter Grid Size (Max 100)");
    let gridNumber = Number(gridInput);
    //let totalGrid = gridNumber * 2;
    if (gridNumber > 100 || gridNumber <= 0) {
        alert("error: max grid size 100x100");
    } else if (isNaN(gridNumber) || gridNumber === "") {
        alert("error: enter a valid number")
    } else {
        for (let i = 0; i < gridNumber * gridNumber; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("square");

    //gridBlock.style.border = "1px solid red";
    gridBlock.style.height = `calc(100% / ${gridNumber})`;
    gridBlock.style.width = `calc(100% / ${gridNumber})`;
    gridBlock.style.boxSizing = "border-box";
    gridContainer.append(gridBlock);
}
    }
})




gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.border = "2px solid blue";
    }
    
    }
)
gridContainer.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.border = "";
    }
})

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
gridContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.background = randomColor();
    }
});
gridContainer.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("square")) {
        event.target.style.background = "";
    }
});
