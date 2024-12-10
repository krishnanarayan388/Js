function SaymyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}
// SaymyName()

// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1+number2);
    
// }
// addTwoNumbers(4,3) // arguments


function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result

    return number1+number2
}
const result=addTwoNumbers(4,3) 
// console.log("Result:",result);

function loginUserMessage(username="Sam"){
    if(username===undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())



function calculatecartPrice(...num1){
    return num1
}
// console.log(calculatecartPrice(200,399,4999));

const User={
    username:"Krishna",
    price:1999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and proice is ${anyobject.price}`);
}
handleObject(User)