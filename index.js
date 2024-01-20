const square = document.getElementById("square-1");

let leftPosition = 0;
let topPosition = 0;
square.style.left = `${leftPosition}px`;
square.style.top = `${topPosition}px`

function handleClick() {
    square.classList.toggle("active");
}

function handleKeyDown(event) {
    if (square.classList.contains("active")) {
        const teclaSelecionada = event.key;

        const box = document.querySelector(".box");
        const squareSize = 70;

        switch (teclaSelecionada) {
            case "ArrowRight":
                leftPosition = Math.min(leftPosition + 10, box.offsetWidth - 3 - squareSize);
                break;
            case "ArrowLeft":
                leftPosition = Math.max(leftPosition - 10, 0);
                break;
            case "ArrowUp":
                topPosition = Math.max(topPosition - 10, 0);
                break;
            case "ArrowDown":
                topPosition = Math.min(topPosition + 10, box.offsetHeight - 3 - squareSize);
                break;
            default:
                alert("Insert a valid key");
                break;
        }

        square.style.left = `${leftPosition}px`;
        square.style.top = `${topPosition}px`;

        console.log(leftPosition);
        console.log(topPosition);
    }
}

square.addEventListener("click", handleClick);
window.addEventListener("keydown", handleKeyDown);