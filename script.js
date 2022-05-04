const container = document.querySelector('#container');

//creates 16x16 grid and sets colorchange UI
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

//this function is to be used to allow the user to set the size of the grid
const changeSize = (num) => {
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div')
        div.className = 'div';
        container.appendChild(div);
        const changeColor = () => {
            div.style.backgroundColor = 'black';
        }
        div.addEventListener('mouseenter', changeColor);
    };
}



const sizeBtn = document.querySelector('#sizeBtn');
//sizeBtn.addEventListener('click', )
