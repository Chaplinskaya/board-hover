const board = document.querySelector('#board');
const colors = ['#4f22df', '#1821f5', '#1757eb', '#bc17eb', '#8818f5', '#8366e3', '#089e64', '#41a446'];
const squaresNumber = 500;

for (let i=0; i<squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
       setColor(square)
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square)
     });

    board.append(square);
    
}
function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];
    //return colors[Math.floor(Math.random() * colors.length)]
}