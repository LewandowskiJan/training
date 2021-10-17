const box=document.getElementById('myBox');
function psychoAnimate(){
  
        box.style=`
        background-color:rgb(${Math.random()*250},${Math.random()*250},${Math.random()*250});
        margin-top:${Math.random()*25}px;
        `
    
}
// psychoAnimate()

box.addEventListener("mouseover", psychoAnimate)


function changeClass(){
  box.getAttribute('class').includes('newclass')
  ? box.setAttribute('class','box')
  : box.setAttribute('class','box newclass');
// console.log(box.getAttribute('class'));
}
// psychoAnimate()

box.addEventListener("click", changeClass)

console.log(changeClass)