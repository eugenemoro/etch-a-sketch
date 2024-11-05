const gridContainer = document.getElementById('grid-container');
const resizeBtn = document.getElementById('resize-btn');
resizeBtn.addEventListener('click', newGridSize);

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    for (let j = 0; j < size; j++) {
      const gridCell = newGridCell(size);
      gridRow.appendChild(gridCell);
    }
    gridContainer.appendChild(gridRow);
  }
}

createGrid(16);

function newGridCell(size) {
  const gridCell = document.createElement('div');
  gridCell.className = 'grid-cell';
  gridCell.style.height = calculateCellSize(size);
  gridCell.style.width = calculateCellSize(size);
  gridCell.style.border = '1px solid black';
  gridCell.addEventListener('mouseenter', colorGridCell);
  return gridCell;
}

function colorGridCell(e) {
  if (e.target.classList.contains('grid-cell')) {
    e.target.style.backgroundColor = randomColor();
  }
}

function newGridSize() {
  const newSize = prompt('Set a number between 16 and 100:');
  gridContainer.replaceChildren();
  if (newSize <= 100 && newSize >= 16) {
    createGrid(newSize);
  } else {
    createGrid(16);
  }
}

function calculateCellSize(size) {
  const basicSize = 320;
  return `${Math.floor(basicSize / size)}px`;
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}