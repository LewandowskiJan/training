
const clickOnBoard = document.getElementById('tictactoe');
let round = 1
clickOnBoard.addEventListener('click', event => {
    let targetID = event.target.id
    let pushOpositionIdToArray = []
    let pushXpositionIdToArray = []
    console.log(event)
    console.log(event.target)
    console.log(event.target.childNodes)
    console.log(event.target.childNodes.length)
    if (round % 2 === 0 && event.target.childNodes.length === 0) {
        addO(targetID)
        round++
    }
    else if (round % 2 !== 0 && event.target.childNodes.length === 0) {
        addX(targetID)
        round++
    }
   
    for (let i = 0; i < event.target.id; i++) {
       if (event.target.id[i].childNodes === "O"){
        pushOpositionIdToArray.push(event.target.id[i])}
        else if (event.target.id[i].childNodes === "X"){
            pushXpositionIdToArray.push(event.target.id[i])
       }
       console.log(pushXpositionIdToArray)
       console.log(pushOpositionIdToArray)
}})

function addX(clickOnBoard) {
    const cell = document.getElementById(clickOnBoard);
    cell.innerHTML = ("&#10005;")
    return
}

function addO(clickOnBoard) {
    const cell = document.getElementById(clickOnBoard);
    cell.innerHTML = ("&#9900;")
    return
}





// function cantClickSameCell(event){
// event.target.childNodes 
// for (let i = 0; i < event.target.childNodes; i++) {
//   if (event.target.childNodes[i].status > 0){}
// }}

const winCondition = new Map([
    ["key 1"[1, 2, 3]],
    ["key 2"[3, 6, 9]],
    ["key 3"[7, 8, 9]],
    ["key 4"[1, 4, 7]],
    ["key 5"[1, 5, 9]],
    ["key 6"[3, 5, 7]],
    ["key 7"[2, 5, 8]],
    ["key 8"[4, 5, 6]]])

// klikniecie i zrobienie X lub O ma pushować id kratki do arraya
// jeżeli na pozycji 1 znajduje się X, i na pozycji 2 znajduje się X i na poz 3 X
// return you won
