const div = document.createElement("div");

const grid = document.querySelector(".container");

const inputSize = document.getElementById("size");
const valueInput = document.getElementById("valorInput");

const botonReset = document.getElementById("reset");

const inputColor = document.getElementById("color");
const colorDefault = "#333333";
let setColor = colorDefault;
function colorSeleccionado(e) {
    setColor = e.target.value;
    console.log(setColor);
}

botonReset.addEventListener("click", reset);

inputSize.addEventListener("input", (e) => {
    let size = e.target.value;

    valueInput.textContent = `${size} X ${size}`;

    gridDiseño(size);
});

let size = 16;

function gridDiseño(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    grid.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");

        gridItem.classList.add("grid-item");

        gridItem.addEventListener("mouseover", cambiarColor);

        grid.appendChild(gridItem);
    }
}

function cambiarColor(e) {
    let R = Math.floor(Math.random() * 256);

    let V = Math.floor(Math.random() * 256);

    let A = Math.floor(Math.random() * 256);
    if (e.type !== "mouseover" && e.type !== "mousedown")
        e.target.style.backgroundColor = `rgb(${R}, ${V}, ${A} )`;
    else e.target.style.backgroundColor = setColor;
}

function reset(e) {
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) => (div.style.backgroundColor = "rgb(255,255,255)"));
}

inputColor.addEventListener("input", colorSeleccionado);

gridDiseño(size);
