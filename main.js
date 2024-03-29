const title = document.querySelector('#title');
title.textContent =' Etch-a-Sketch';
//Title Styles
title.style.backgroundColor = 'blue';
title.style.textAlign = 'center';
title.style.padding = '12px'
title.style.color = 'white'
title.style.fontSize = '20px'
//End of title styles
//Container styles
const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = ' 960px';
//End of container styles

function gridResize(){
    customGridSize = prompt('Please enter a grid size between 1 to 100', 1);
    for(let i = 0; i < customGridSize*customGridSize; i++){
    const grid = document.createElement('div');
    grid.classList.add('square');
    container.appendChild(grid);
}}
function darkSketch(){
    const squares = document.getElementsByClassName('square');
    // Iterate over the collection and attach event listeners to each element
    for (let i = 0; i < squares.length ; i++) {
    squares[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'grey';
        });
    }}
function lightSketch(){
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length ; i++) {
    squares[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightGrey';
        });
    }}

const gridSize = document.querySelector('#gridSize');
gridSize.addEventListener('click', function(){
    gridResize();
    darkSketch();
    })

const darkSketchs = document.querySelector('#darkSketch');
darkSketchs.addEventListener('click', darkSketch);
const lightSketchs = document.querySelector('#lightSketch');
lightSketchs.addEventListener('click', lightSketch);
const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length ; i++) {
        squares[i].style.backgroundColor = 'white'
    }
})
