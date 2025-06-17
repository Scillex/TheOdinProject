const main = document.querySelector('.main');
let i = 10;

function makeGrid(i) {
    main.innerHTML = '';

    for (let k=1; k<=i**2; k++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        squareDiv.style.height = `${500 / i}px`;
        squareDiv.style.width = `${500 / i}px`;

        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = `blue`;
        })

        main.appendChild(squareDiv);
    }
}

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    i = prompt("Choose the number of squares(max 100)")

    if (i > 100) {
        alert("The number must be between 1 and 100!");
        return;
    }
    else if (i <= 0) {
        alert("No no no...");
        return;
    }
    else if (isNaN(i)) {
        alert("Put a number !");
        return;
    }
    makeGrid(i)
})

makeGrid(i)