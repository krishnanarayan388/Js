// console.log("2">1);

// console.log(null ==0);
// console.log(null>=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null<=0);

// Comparison operators (>=, <=, >, <) convert null to 0.
// Loose equality (==) does not convert null to 0, so null == 0 is false.


let myName="Krishna"
let anotherName=myName
anotherName="krish"

console.log(myName);
console.log(anotherName)


let userOne={
    email:"krish@gmail.com",
    upi: "user@ybl"
}
let userTwo=userOne

userTwo.email="krishna@gmail.com"
console.log(userOne.email)