//create a 16x16 grid of square divs
const container = document.querySelector('#container');

for (let i=0; i<16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    
    for (let e=0; e<16; e++) {
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        row.appendChild(column);

        //hover effect
        column.addEventListener('mouseover', () => {
            column.setAttribute('class', 'hover');
        });
        // column.addEventListener('mouseout', () => {
        //     column.setAttribute('class', 'column');
        // });
    }
}