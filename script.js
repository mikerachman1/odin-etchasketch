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
        container.setAttribute('style', `display: grid; grid-template-columns: repeat(${num}, 20px)`)
    };
}

changeSize(20);


const sizeBtn = document.querySelector('#sizeBtn');
//sizeBtn.addEventListener('click', )
