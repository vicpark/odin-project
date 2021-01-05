containerDiv = document.getElementById('container');
clearBtn = document.getElementById('clearBtn');


clearBtn.addEventListener('click',createNewGrid);

function createNewGrid() {
    // empty container
    // create n squares with size 1000/n
    let n = parseInt(prompt('Enter a number from 1 to 100 to create a new NxN grid'));
    if (n > 100) {
        alert('Choose a number less than 100');
        return;
    }
    container.innerHTML = '';
    let numSquares = n*n;
    for (let i = 0; i < numSquares; i++) {
        squareDiv = document.createElement("div");
        squareDiv.classList.add('square');
        squareDiv.style.height = 1000/n + 'px';
        squareDiv.style.width = 1000/n + 'px';
        squareDiv.style.background = setColor();
        squareDiv.style.filter = 'brightness(100%)';
        squareDiv.addEventListener("mouseover", darkenColor);
        containerDiv.appendChild(squareDiv);
    
    }
}






for (let i = 0; i < 16; i++) {
    squareDiv = document.createElement("div");
    squareDiv.classList.add('square');
    squareDiv.style.background = setColor();
    squareDiv.style.filter = 'brightness(100%)';
    squareDiv.addEventListener("mouseover", darkenColor);

    containerDiv.appendChild(squareDiv);

}

function random256() {
    return Math.floor(Math.random() * 256)
}
function setColor() {
    return randomColor = 'rgb(' + random256() + ',' + random256() + ',' + random256() +  ')'; 
}
function darkenColor() {
    let regex = /brightness\((\d{1,3})%\)/;
    let currentFilter = parseInt(this.style.filter.match(regex)[1]);
    if (currentFilter == 0) {
        return;
    }
    let newFilter = currentFilter - 10;
    this.style.filter = `brightness(${newFilter}%)`;
}



