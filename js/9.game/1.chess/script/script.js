// const = 
let gameBoard;
const selected = []

window.onload = (() => {
    gameBoard = document.getElementById("chessboard")
    let counter = 0
    for (let i = 7; i > 1; i -= 5) {
        console.log(i)
        for (let k = 0; k < 8; k++) {
            let cellColumn;

            switch (k) {
                case 0:
                    cellColumn = "a";
                    break;
                case 1:
                    cellColumn = "b";
                    break;
                case 2:
                    cellColumn = "c";
                    break;
                case 3:
                    cellColumn = "d";
                    break;
                case 4:
                    cellColumn = "e";
                    break;
                case 5:
                    cellColumn = "f";
                    break;
                case 6:
                    cellColumn = "g";
                    break;
                case 7:
                    cellColumn = "h";
                    break;
            }

            console.log(k)
            const cell = document.getElementById(cellColumn + i)
            // cell.style = "background-color:red"
            cell.innerHTML = `<div class="pionek" id=p${counter}>&#128023;</div>`
            counter++
        }
    }
    //  tu mozna wrzucić kolejny loop na figury np.
// console.log(gameBoard.childNodes)
const currentCell = document.getElementById("a7")
    currentCell.addEventListener("click", function(e){
        const cella7 = document.getElementById("a7")
selected.splice(0,1,cella7)
console.log(selected)
    });

    const currentCell2 = document.getElementById("a6")
    currentCell2.addEventListener("click", function(e){
        const cella6 = document.getElementById("a6")
        let elem
        if (selected.length === 0){
            selected.splice(0,1,cella6)
    
        }
        else {
            e.target.appendChild(selected[0].firstChild)
            // elem = selected[0].removeChild(selected[0].firstChild)
            // console.log(elem)
            console.log(e)
        }
    });

})


