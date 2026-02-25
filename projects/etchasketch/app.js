const container = document.getElementById("grid");

// Makes a grid. Default grid size is 16 x 16.
function makeGrid(rows, cols) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let r = 0; r < (rows); r++) {
    let row = document.createElement("div");
    container.appendChild(row).classList = "row";
    for (let c = 0; c < (cols); c++) {
      let column = document.createElement("div");
      container.appendChild(column).classList = "column";
      column.addEventListener("mouseover", changeColor);
      row.appendChild(column);
    }
  };

  // Add event listener to grid size button and call sizePrompt.
  let gridSize = document.getElementById("gridSize");
  gridSize.addEventListener("click", () => {
    sizePrompt();
  });

  // Add event listener to clear button and call makeGrid.
  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", () => {
    makeGrid(rows, cols);
  });
}

// Check which radio button is checked then change background color of div to
// that color.
function changeColor() {
  let blackRadio = document.getElementById('black');
  let redRadio = document.getElementById('red');
  let blueRadio = document.getElementById('blue');
  let rainbowRadio = document.getElementById('rainbow');
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  if (blackRadio.checked) {
    this.style.backgroundColor = 'black';
  }
  else if (redRadio.checked) {
    this.style.backgroundColor = 'red';
  }
  else if (blueRadio.checked) {
    this.style.backgroundColor = 'blue';
  }
  else if (rainbowRadio.checked) {
    this.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}

// Prompts for user input for number of rows and columns.
// Error handling checks if input is number and between 0 and 99.
function sizePrompt() {
  let row = prompt("Please enter how many rows for the new grid", "16");
  let column = prompt("Please enter how many columns for the new grid", "16");
  while (isNaN(row) === true || isNaN(column) === true) {
    if (isNaN(row) === true) {
      row = prompt("Please enter a number for rows", "16");
    }
    else if (isNaN(column) === true) {
      column = prompt("Please enter a number for columns", "16");
    }
  }
  if (row < 0 || row > 99) {
    row = prompt("Please enter a number of rows between 0 and 99", "16");
  }
  if (column < 0 || column > 99) {
    column = prompt("Please enter a number of columns between 0 and 99", "16");
  }
  makeGrid(row, column);
}

// Creates default grid size of 16 x 16.
makeGrid(16, 16);