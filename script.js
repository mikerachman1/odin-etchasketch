const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.className = 'div';
    container.appendChild(div);
    const changeColor = () => {
        div.style.backgroundColor = 'black';
    }
    div.addEventListener('mouseenter', changeColor);
};



