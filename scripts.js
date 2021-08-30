const container = document.querySelector('#container');
const blocks = document.getElementsByClassName('block');

//hover effect function
function hover() {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('mouseenter', () => {
            const color = randomColor();
            blocks[i].style.background = color;
        }, {once : true});
    }
}

//create grid function
function createGrid(x, y) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    container.appendChild(grid);

    for (let i=0; i<x; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        grid.appendChild(row);
        
        for (let e=0; e<y; e++) {
            const block = document.createElement('div');
            block.setAttribute('class', 'block');
            row.appendChild(block);
            
        }
    }
    
    hover();
}

//restrict input
function restrictValue(input) {
    if (input < 1) {
        return 1;
    }
    else if (input > 100) {
        return 100;
    }
    else if (isNaN(input)) {
        return 16;
    }
    else {
        return input;
    }
}

//new grid function
function newGrid() {
    container.removeChild(grid);
    let x = prompt('How many rows do you want your grid to have? (max=100, min=1)', '');
    x = Number(x);
    x = restrictValue(x);
    let y = prompt('How many columns do you want your grid to have? (max=100, min=1)', '');
    y = Number(y);
    y = restrictValue(y);
    createGrid(x,y);
}

//button to make new grid
const resetButton = document.createElement('button');
container.appendChild(resetButton);
resetButton.setAttribute('id', 'reset');
resetButton.textContent = 'New Grid';
resetButton.addEventListener('click', newGrid);
createGrid(16, 16);