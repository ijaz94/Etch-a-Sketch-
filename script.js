const container = document.querySelector(".container");
const gridClr = document.querySelector(".clr");
const gridChanger = document.querySelector(".changeGrid");
const changeOpacity = document.querySelector(".opacity");

// To create 16 x 16 grid first
for (let i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.setAttribute("class", "squaredivs");
  for (let j = 0; j < 16; j++) {
    let row = document.createElement("div");
    row.setAttribute("class", "squaredivs");
    row.style.border = "1px solid black";
    row.style.opacity = "0.2";
    column.appendChild(row);

    row.addEventListener("mouseenter", () => {
      // when mouse enter the grid area frist change the background color to random RGB values
      const red = getRandom(0, 256);
      const green = getRandom(0, 256);
      const blue = getRandom(0, 256);
      row.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      // when mouse enter the grid area also increase opacity by 0.1 i.e 10%
      let opacity = Number(row.style.opacity);
      row.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
    });
    gridClr.addEventListener("click", () => {
      row.style.backgroundColor = "";
      row.style.opacity = "0.2";
    });
  }

  container.appendChild(column);
}

// Now create random grid when button click for that frist remove the existing grid then create new
gridChanger.addEventListener("click", () => {
  container.textContent = "";

  let num = +prompt("Enter the grid size: ", "16");
  if (num > 100) {
    alert("Choose a smaller number");
  } else if (isNaN(num) || num === null || num === "" || num === " ") {
    alert("Please choose a valid number");
  } else {
    for (let i = 0; i < num; i++) {
      let column = document.createElement("div");
      column.setAttribute("class", "squaredivs");
      for (let j = 0; j < num; j++) {
        let row = document.createElement("div");
        row.setAttribute("class", "squaredivs");
        row.style.border = "1px solid black";
        row.style.opacity = "0.2";
        column.appendChild(row);
        row.addEventListener("mouseenter", () => {
          // when mouse enter the grid area frist change the background color to random RGB values
          const red = getRandom(0, 256);
          const green = getRandom(0, 256);
          const blue = getRandom(0, 256);
          row.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
          // when mouse enter the grid area also increase opacity by 0.1 i.e 10%
          let opacity = Number(row.style.opacity);
          row.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
        });
        gridClr.addEventListener("click", () => {
          row.style.backgroundColor = "";
          row.style.opacity = "0.2";
        });
      }
      container.appendChild(column);
    }
  }
});
// created function for to select random rbg values
function getRandom(from , to) {
  return from + Math.floor(Math.random() * to);
}

