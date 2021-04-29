const container = document.querySelector('#container');

//button to make new grid
const resetButton = document.createElement('button');
container.appendChild(resetButton);
resetButton.setAttribute('id', 'reset');
resetButton.textContent = 'New Grid';
resetButton.addEventListener('click', newGrid);
createGrid(16, 16);

//new grid function
function newGrid() {
    container.removeChild(grid);
    const x = prompt('How many rows do you want your grid to have?', '');
    const y = prompt('How many columns do you want your grid to have?', '');
    createGrid(x,y);
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
            const column = document.createElement('div');
            column.setAttribute('class', 'column');
            row.appendChild(column);
    
            //hover effect
            column.addEventListener('mouseover', () => {
                column.setAttribute('class', 'hover');
            });
        }
    }
}