let empate = false;
let botaoReset = document.getElementById("reset");
let stop = false;
function checkVertical() {
  setTimeout(function (event) {
    for (let y = 0; y < edgeY; y++) {
      for (let x = 0; x < 7; x++) {
        let cell = myArray[y][x];
        if (cell !== undefined) {
          if (cell === myArray[y + 1][x] && cell === myArray[y + 2][x] && cell === myArray[y + 3][x]) {
            document.getElementById("resultado").style.visibility = "visible";
            console.log("Lig-4 encontrado VERTICAL")
            mostraVencedor(myArray[y][x])
            empate = true;
            stop = true;
          }
        }
      }
    }
  }, 1000);
}
function checkHorizontal() {
  setTimeout(function (event) {
    for (let y = 0; y < myArray.length; y++) {
      for (let x = 0; x < edgeX; x++) {
        let cell = myArray[y][x];
        if (cell !== undefined) {
          if (cell === myArray[y][x + 1] && cell === myArray[y][x + 2] && cell === myArray[y][x + 3]) {
            document.getElementById("resultado").style.visibility = "visible";
            console.log("Lig-4 encontrado HORIZONTAL")
            mostraVencedor(myArray[y][x])
            empate = true;
            stop = true;
          }
        }
      }
    }
  }, 1000);
}
function checkDiagonalSobe() {
  setTimeout(function (event) {
    for (let y = 3; y < myArray.length; y++) {
      for (let x = 0; x < edgeX; x++) {
        cell = myArray[y][x];
        if (cell !== undefined) {
          if (cell === myArray[y - 1][x + 1] && cell === myArray[y - 2][x + 2] && cell === myArray[y - 3][x + 3]) {
            document.getElementById("resultado").style.visibility = "visible";
            console.log("Lig-4 encontrado DIAGONAL QUE SOBE")
            mostraVencedor(myArray[y][x])
            empate = true;
            stop = true;
          }
        }
      }
    }
  }, 1000);
}
function checkDiagonalDesce() {
  setTimeout(function (event) {
    for (let y = 0; y < edgeY; y++) {
      for (let x = 0; x < edgeX; x++) {
        cell = myArray[y][x];
        if (cell !== undefined) {
          if (cell === myArray[y + 1][x + 1] && cell === myArray[y + 2][x + 2] && cell === myArray[y + 3][x + 3]) {
            document.getElementById("resultado").style.visibility = "visible";
            console.log("Lig-4 encontrado DIAGONAL QUE DESCE")
            mostraVencedor(myArray[y][x])
            empate = true;
            stop = true;
          }
        }
      }
    }
  }, 1000);
}
function checkEmpate() {
  setTimeout(function (event) {
    if (myArray[0].length === 6 && myArray[1].length === 6 && myArray[2].length === 6 && myArray[3].length === 6 && myArray[4].length === 6 && myArray[5].length === 6 && myArray[6].length === 6 && empate == false) {
      document.getElementById("resultado").style.visibility = "visible";
      console.log("lig-4 EMPATE");
      document.getElementById("resultado").style.visibility = "visible";
      document.getElementById("resultado").innerHTML = "EMPATE !!!";
    }
  }, 1000);
}
// Função chamada através do clique do botão que reseta o jogo e
// zera o array principal.
botaoReset.addEventListener("click", function (e) {
  // Lógica para limpar o tabuleiro
  for (let i = 0; i < 7; i++) {
    let reseT = document.getElementById(i);
    if (myArray[i].length !== 0) {
      for (let j = 0; j < myArray[i].length; j++) {
        reseT.removeChild(reseT.childNodes[0]);
      }
      myArray[i].splice(0);
    }
  }
  document.getElementById('resultado').style.visibility = "hidden";
  stop = false
  empate = false;
});
function mostraVencedor(array) {
  console.log("Quem ganhou foi o jogador " + array)
  if (array === 1) {
    document.getElementById("resultado").innerHTML ="JOGADOR AMARELO GANHOU !!!";
    console.log("Quem ganhou foi o jogador Amarelo")
  } else{
    document.getElementById("resultado").innerHTML = "JOGADOR AZUL GANHOU !!!";
    console.log("Quem ganhou foi o jogador Azul")
  }
}