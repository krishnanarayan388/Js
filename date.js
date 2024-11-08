// // console.log('current Date and Time',Temporal.Now.instant());

// let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
// // console.log(mydate.toString());


let myCreatedDate= new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp=Date.now()
// // console.log(myTimeStamp);

// // console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate);
console.log(newDate.getHours());

newDate.toLocaleDateString('default',{
    weekday:"long",
})
