const canvas = document.getElementById('sketchPad');
const ctx = canvas.getContext('2d');

// Button Elements
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const defaultBtn = document.getElementById('defaultBtn');
const currentColorDisplay = document.getElementById('currentColor');

// Initial Setup
ctx.fillStyle = '#ffffff'; 
ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill with white background initially

ctx.strokeStyle = '#000000'; // Default drawing color
ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Drawing Functions
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

// Mouse Event Listeners for Canvas
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Button Event Listeners for Colors
defaultBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#000000';
    currentColorDisplay.textContent = 'Black';
});

redBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#ff0000';
    currentColorDisplay.textContent = 'Red';
});

blueBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#0000ff';
    currentColorDisplay.textContent = 'Blue';
});

greenBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#008000'; 
    currentColorDisplay.textContent = 'Green';
});

// Eraser Functionality
eraserBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#ffffff';
    currentColorDisplay.textContent = 'White (Eraser)';
});

// Clear Canvas Functionality
clearBtn.addEventListener('click', () => {
    // Fills the entire canvas with white to reset it
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});