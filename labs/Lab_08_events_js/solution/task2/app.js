const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const colorArea = document.querySelector(".color-area");

redInput.addEventListener("input", handleColorChange);
greenInput.addEventListener("input", handleColorChange);
blueInput.addEventListener("input", handleColorChange);

function handleColorChange() {
    const red = parseInt(redInput.value) || 0;
    const green = parseInt(greenInput.value) || 0;
    const blue = parseInt(blueInput.value) || 0;

    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        const color = `rgb(${red}, ${green}, ${blue})`;
        colorArea.style.backgroundColor = color;
    }
}
