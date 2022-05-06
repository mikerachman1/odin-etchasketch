const container = document.querySelector('#container');

//creates default 16x16 grid and sets colorchange UI
let sketchPad = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div')
        div.className = 'div';
        container.appendChild(div);
        const changeColor = () => {
            div.style.backgroundColor = 'black';
        }
        div.addEventListener('mouseenter', changeColor);
    };
};

sketchPad();

//this function removes the default grid
const removeStartGrid = () => {
    container.replaceChildren();
}

//this function is to be used to allow the user to set the size of the grid
const changeSize = (num) => {
    removeStartGrid();
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div')
        div.className = 'div';
        container.appendChild(div);
        const changeColor = () => {
            div.style.backgroundColor = 'black';
        }
        div.addEventListener('mouseenter', changeColor);
        container.setAttribute('style', `display: grid; grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr); width: 400px; height: 400px;`)
    };
}

const sizeBtn = document.querySelector('#sizeBtn');


//This changes the size of the grid with user entered prompt when change size button is pressed
sizeBtn.addEventListener('click', function() {
    let newSize = prompt('Enter new size of grid', '24');
    if (newSize >= 100) {
        alert("Error: Don't enter number greater than 100")
    } else {
        changeSize(newSize);
    }
});
