let players = ['x', 'o'];
let activePlayer;
let stringNumber = 4;
let columnNumber;
columnNumber = stringNumber;
let field;

function checkWinner() {
  for (let i = 0; i < field.length; i++) {     //проверка по строкам
    let counter = 0;
    for (let j = 0; j < field.length; j++) {
      if (field[i][j] === players[activePlayer]) {
        counter +=1;
      }
      if (counter === field.length) {
        showWinner(activePlayer);  
      } 
    }
  }

  for (let j = 0; j < field.length; j++) {    //проверка по столбцам
    let counter = 0;
    for (let i = 0; i < field.length; i++) {
      if (field[i][j] === players[activePlayer]) {
        counter += 1;
      }
      if (counter === field.length) {
        showWinner(activePlayer); 
      }
    }
  }

  for (let j = 0; j < field.length; j++) {   //проверка по диагонали слева направо
    let counter = 0;
    for (let i = 0; i < field.length; i++) {
      if (field[i][i] === players[activePlayer]) {
        counter += 1;
      }
      if (counter === field.length) {
        showWinner(activePlayer);
      }
    }
  }

  for (let j = 0; j < field.length; j++) {   //проверка по диагонали справа налево
    let counter = 0;
    let j = field.length - 1;
    for (let i = 0; i < field.length; i++) {
      if (field[i][j] === players[activePlayer]) {
        counter += 1;
      }
      if (counter === field.length) {
        showWinner(activePlayer);
      }
      if (j > 0) {
        j -= 1;
      }
    }
  }
}

function startGame() {
  field = [];
  for (let i = 0; i < columnNumber; i++){
    field[i] = [];
    for (let j = 0; j < stringNumber; j++){
      field[i][j] = '';
    }
  }

  renderBoard(field);
  activePlayer = Math.floor(Math.random() * players.length);
}

function click(row, col) {
  if (field[row][col] === '') {
    field[row][col] = players[activePlayer];
  }

  checkWinner();
  activePlayer++;

  if (activePlayer % 2 === 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  renderBoard(field);
}