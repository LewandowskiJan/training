const winC1 = [1, 2, 3];
const winC2 = [3, 6, 9];
const winC3 = [7, 8, 9];
const winC4 = [1, 4, 7];
const winC5 = [1, 5, 9];
const winC6 = [3, 5, 7];
const winC7 = [2, 5, 8];
const winC8 = [4, 5, 6];

const clickOnBoard = document.getElementById('tictactoe');
let round = 1
let pushOpositionIdToArray = []
let pushXpositionIdToArray = []


clickOnBoard.addEventListener('click', event => {
    let targetID = event.target.id
 
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.childNodes)
    // console.log(event.target.childNodes.length)
    if (round % 2 === 0 && event.target.childNodes.length === 0) {
        addO(targetID)
        pushOpositionIdToArray.push(+event.target.id)
        console.log(pushOpositionIdToArray)
        console.log(winC1)
        round++
        if(pushOpositionIdToArray.length > 2 && 
            winC1.every(r => pushOpositionIdToArray.includes(r)) ||
            winC2.every(r => pushOpositionIdToArray.includes(r)) ||
            winC3.every(r => pushOpositionIdToArray.includes(r)) ||
            winC4.every(r => pushOpositionIdToArray.includes(r)) ||
            winC5.every(r => pushOpositionIdToArray.includes(r)) ||
            winC6.every(r => pushOpositionIdToArray.includes(r)) ||
            winC7.every(r => pushOpositionIdToArray.includes(r)) ||
            winC8.every(r => pushOpositionIdToArray.includes(r)))
{
            console.log('Found all of', pushOpositionIdToArray, 'in', winC1);
            console.log("Player 0 won")
 

        }
    }
    else if (round % 2 !== 0 && event.target.childNodes.length === 0) {
        addX(targetID)
        pushXpositionIdToArray.push(+event.target.id)
        console.log(pushXpositionIdToArray)
        round++
        if(pushXpositionIdToArray.length > 2 && 
            winC1.every(r => pushXpositionIdToArray.includes(r)) ||
            winC2.every(r => pushXpositionIdToArray.includes(r)) ||
            winC3.every(r => pushXpositionIdToArray.includes(r)) ||
            winC4.every(r => pushXpositionIdToArray.includes(r)) ||
            winC5.every(r => pushXpositionIdToArray.includes(r)) ||
            winC6.every(r => pushXpositionIdToArray.includes(r)) ||
            winC7.every(r => pushXpositionIdToArray.includes(r)) ||
            winC8.every(r => pushXpositionIdToArray.includes(r)))
{
            console.log('Found all of', pushXpositionIdToArray, 'in', winC1);
            console.log("Player X won")
    }}



   

   

   

    // for (let i = 0; i < 9; i++) {
    //     if (target.id = [i] && target.childNodes[0] === "O"){pushXpositionIdToArray.push(target.id)}



//     for (let i = 0; i < event.target.id; i++) {
//        if (event.target.id[i].childNodes === "O"){
//         pushOpositionIdToArray.push(event.target.id[i])}
//         else if (event.target.id[i].childNodes === "X"){
//             pushXpositionIdToArray.push(event.target.id[i])
//        }
//        console.log(pushXpositionIdToArray)
//        console.log(pushOpositionIdToArray)
// }
})






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



// klikniecie i zrobienie X lub O ma pushować id kratki do arraya
// jeżeli na pozycji 1 znajduje się X, i na pozycji 2 znajduje się X i na poz 3 X
// return you won
