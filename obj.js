// singleton 


// object literals

const JsUser={
    name:"Krishan",
    age:18,
    location:"Bengaluru",
    email:"krishna@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday "]
}
// console.log(email);
// JsUser.email="kanha@gmail.com"
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello JsUser");
}
JsUser.greeting2=function(){
    console.log(`Hello JsUser,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2())