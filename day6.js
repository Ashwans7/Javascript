// // loop in javascript
// //Array (for of)
// let days = ["sun","mon","tue","wed"]
// console.log(days)
// for(let day of days){
//     console.log(day)
// }

// let datas = [{
//     name:"ashwan",
//     adress:"kathmandu"
// },
// {   
//     name:"Shrestha",
//     adress:"lalitpur"
// }]
// for(let data of datas){
//     console.log(data.adress)
// }


// let names = ["Manish","anish","ish"]
// for(let name of names ) {
//     console.log("my name is " + name)
//     console.log(`my name is ${name}`)
// }

// let myInformation = [
//     {
//         name : "Manish",
//         age : 22
//     },
//     {
//         name :"Anish",
//         age : 20
//     }
// ]

// for(let info of myInformation){
//     console.log(`my age is ${info.age}`)
// }

// for(let info of myInformation){
//     console.log(`${info.name} age is ${info.age}`)
// }

//for loop, while loop, do while , for of....
//function in javascript
//two types of function
//reular function
function addTwoNumber (a,b,c=3){
    console.log(a+b+c)
}
addTwoNumber(1,2,3)

//arrow function
let  addTwoNumbers = (a,b,c=30) => {
    console.log(a+b+c)
}
addTwoNumbers(1,2,3)

let information = [
    {
        name : "Manish",
        age : 22
    },
    {
        name : "Anish",
        age : 20
    }
]



function printinformation (information){
for(let info of information)
{
    console.log(`my name is ${info.name} and age is ${info.age}`)
}
}

printinformation(information)


let days = ["sun","mon","tue"]
function printdays (day){
for(let days of day)
{
    console.log(`today is ${days}`)
}
}
printdays(days)
//higher order function in javascript