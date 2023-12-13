import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  const chessboard = document.querySelector("#chessboard");
  const rows = "87654321";
  const cols = "abcdefgh";

  const characters = {
    rl : "♖",
    knl : "♘",
    bl : "♗",
    ql : "♕",
    kl : "♔",
    pl : "♙",

    rd : "♜",
    knd : "♞",
    bd : "♝",
    qd : "♛",
    kd : "♚",
    pd : "♟",

    sp : " "
  }

  const initialBoard = [
    "rl knl bl ql kl bl knl rl",
    "pl pl pl sp pl pl pl pl",
    "sp sp sp pl sp sp sp sp",
    "sp sp sp sp sp sp sp sp",
    "sp sp sp pd sp sp sp sp",
    "sp sp sp sp sp sp sp sp",
    "pd pd pd sp pd pd pd pd",
    "rd knd bd kd qd bd knd rd",
  ]
  
  for(let row = 0; row < 8 ; row++ ) {
    const currentChar = initialBoard[row].split(" ").map(char =>  characters[char]);
  
    for(let col = 0; col < 8; col++) {
      const place = document.createElement("div");
      place.textContent = currentChar[col];
  
  
      let isDark = (row + col) % 2 === 1;
  
      if(isDark) {
        place.className = "dark";
      } else {
        place.className = "light";
      }
  
  
     chessboard.append(place);
    }
  }
});


function pickChar(){ 
  // []
}



document.addEventListener("click" , (e) => {
  console.log('[e.target.textContent]', e.target.textContent);
})
