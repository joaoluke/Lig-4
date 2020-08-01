let discoAzul = document.createElement('div');
discoAzul.id= 'discoazul';

for (let c = 0; c < 7; c++) {
    let divC = document.createElement("div")
    divC.className = "coluna"
    divC.id = c
    global.appendChild(divC)
    for (let l = 0; l < 6; l++) {
    }
}

let colunas = document.querySelectorAll(".coluna");

let player1 = document.createElement('div');
player1.className = 'jogador1';
let player2 = document.createElement('div');
player2.className = 'jogador2';

for (let i = 0; i < colunas.length; i++) {
    colunas[i].addEventListener('click', selecionaColuna, false);
}

objTroca = {
    troca: false,
}

const myArray = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

const edgeX = 6 - 3;
const edgeY = myArray.length - 3;

function selecionaColuna(e) {
    let coluna = e.currentTarget;

    if (coluna.childElementCount < 6) {
        if (objTroca.troca) {

            if (stop === false) {
                let create2 = document.createElement("div")
                create2.className = "jogador2"
                coluna.appendChild(create2)
                if (coluna.id === "0") {
                    myArray[0].push(2)
                } else if (coluna.id === "1") {
                    myArray[1].push(2)
                } else if (coluna.id === "2") {
                    myArray[2].push(2)
                } else if (coluna.id === "3") {
                    myArray[3].push(2)
                } else if (coluna.id === "4") {
                    myArray[4].push(2)
                } else if (coluna.id === "5") {
                    myArray[5].push(2)
                } else if (coluna.id === "6") {
                    myArray[6].push(2)
                }
                objTroca.troca = false
            }

        } else {

            if (stop === false) {
                let create = document.createElement("div")
                create.className = "jogador1"
                coluna.appendChild(create)
                if (coluna.id === "0") {
                    myArray[0].push(1)
                } else if (coluna.id === "1") {
                    myArray[1].push(1)
                } else if (coluna.id === "2") {
                    myArray[2].push(1)
                } else if (coluna.id === "3") {
                    myArray[3].push(1)
                } else if (coluna.id === "4") {
                    myArray[4].push(1)
                } else if (coluna.id === "5") {
                    myArray[5].push(1)
                } else if (coluna.id === "6") {
                    myArray[6].push(1)
                }
                objTroca.troca = true
            }
        }

        checkVertical();
        checkHorizontal();
        checkDiagonalSobe();
        checkDiagonalDesce();
        checkEmpate();
    }
}