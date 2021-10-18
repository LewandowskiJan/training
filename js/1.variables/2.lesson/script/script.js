// var scope hoisting
var name0 = 'Jean';
var name3;
console.log(name0);
console.log(name2);
// console.log(name1); // Cannot access 'name1' before initialization


const name1 = 'Julia';
console.log(name0);
var name2 = 'Julia';

name3 = 'Julia';

// variable scope const=let

const productList = [];
console.log(productList)
function addProduct() {
    const product= 'product1';
 
    if(true){
        const special= 'special';
        console.log(productList)
        console.log(product);
        console.log(special);
    }
    console.log(productList);
    console.log(product);
    // console.log(special); //ReferenceError: product is not defined
}
addProduct()

console.log(productList);
// console.log(product); //ReferenceError: product is not defined
// console.log(special); //ReferenceError: product is not defined





function replaceWithText(text = "", selectedText = "", replaceWith = "") {
    if (text.includes(selectedText)) {
         text=text.replace(selectedText, replaceWith);
        return replaceWithText(text, selectedText, replaceWith)
    } else {
        return text;
    }
}


let text1= `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime qui eius aliquid explicabo,
expedita quod exercitationem harum ullam sapiente modi impedit eum illum sunt voluptatem officia fuga.
Quibusdam, molestias sint.`;

console.log(text1);
console.log('===================');
text1=replaceWithText(text1, 'r', 'xxx');
console.log(text1);
