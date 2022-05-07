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
    let newSize = prompt('Enter number of squares per side', '24');
    if (newSize >= 100) {
        alert("Error: Don't enter number greater than 100")
    } else {
        changeSize(newSize);
    }
});



const rainbowBtn = document.querySelector('#rainbow');
const boxes = container.children
const rainbowEffect = () => {
    for (const box of boxes) {
        box.addEventListener('mouseenter', function() {
            const randColorNum1 = Math.floor(Math.random()*255);
            const randColorNum2 = Math.floor(Math.random()*255);
            const randColorNum3 = Math.floor(Math.random()*255);
        
            box.style.backgroundColor = `rgb(${randColorNum1}, ${randColorNum2}, ${randColorNum3})`;
            box.style.opacity = '1';
        })
    };
};
rainbowBtn.addEventListener('click', rainbowEffect);


const greyBtn = document.querySelector('#greyscale');
const greyEffect = () => {
    for (const box of boxes) {
        let opacity = 0;
        box.addEventListener('mouseenter', function() {
            box.style.backgroundColor = 'black';
            opacity += 0.1;
            box.style.opacity = opacity.toString();
        });
    };
};
greyBtn.addEventListener('click', greyEffect);



const eraserBtn = document.querySelector('#eraser');
const eraserEffect = () => {
    for (const box of boxes) {
        box.addEventListener('mouseenter', function() {
            box.style.backgroundColor = 'white';
            box.style.opacity = '1';
        });
    };
};
eraserBtn.addEventListener('click', eraserEffect);




const blackBtn = document.querySelector('#black');
const blackEffect = () => {
    for (const box of boxes) {
        box.addEventListener('mouseenter', function() {
            box.style.backgroundColor = 'black';
            box.style.opacity = '1';
        });
    };
};
blackBtn.addEventListener('click', blackEffect);