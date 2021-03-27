const container = document.getElementById("container");
// array of colors
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// number of squares
const SQUARES = 500;

// iterate through as many times as there are squares
for (let i = 0; i < SQUARES; i++) {
  // create a div with class square
  const square = document.createElement("div");
  square.classList.add("square");
  // listen for mouseover on square to call setColor on that square
  square.addEventListener("mouseover", () => setColor(square));
  // listen for mouseout on square to call removeColor on that square
  square.addEventListener("mouseout", () => removeColor(square));
  // append square to container
  container.appendChild(square);
}

// get a random color from colors array and set it to the background and box-shadow colors for element
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// reset background and box-shadow to default
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

// return random integer between 1 and colors.length as index on colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
