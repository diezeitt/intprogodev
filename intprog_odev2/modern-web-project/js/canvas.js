// Canvas and necessary elements are selected
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearCanvasButton = document.getElementById("clearCanvas");

let isDrawing = false;
let color = "#000000";
let size = 5;

// Drawing process is initiated
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.closePath();
});

// Color picker
colorPicker.addEventListener("input", (e) => {
  color = e.target.value;
});

// Brush size
brushSize.addEventListener("input", (e) => {
  size = e.target.value;
});

// Clear button
clearCanvasButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});