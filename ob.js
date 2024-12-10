// const tinderUser=new Object()
const tinderUser={}
tinderUser.Id="123anb"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"k@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Krish",
            lastname:"Nara"
        }
    }
}
// console.log(regularUser.fullname.userfullname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



const course = {
    coursename:"Js",
    courseprice:"999",
    courseInstructor:"Kanha"
}

// course.courseInstructor

const {courseInstructor:instructor}=course
console.log(instructor);


// {
//     "name":"Krishna",
//     "coursename":"Js in Hindi",
// }