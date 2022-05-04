const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div')
    div.className = 'div';
    div.textContent = 'p';
    container.appendChild(div);
};