// // let name = "Ashwan Shrestha"
// // let age = 25
// // let address = "Lalitpur"

// let me = Object.freeze({ 
//     name : "Ashwan Shrestha",
//     age : 25,
//     address : "lalitpur"
//  }) 

// // me.college = "Softwarica"
// // console.log(me)
// //  console.log(me.age)
// //  console.log(me.address)

// //  console.log(me["age"])
// //  console.log(me["address"])

// console.log(Object.keys(me))
// console.log(Object.values(me))


// let myInformation ={
//         name : "Ashwan Shrestha",
//         age : 22,
//         location : "kathmandu"
// }
// console.log(myInformation)

// let age = myInformation.age
// console.log(age)

// let name = myInformation.name
// console.log(name)


//destructure
// let {name,age,location} = myInformation
// console.log(name,age,location)





//Conditional Statement
let isRaining = true

// if(isRaining) {
//     console.log("carry umbrella")
// }
// else
// {
//     console.log("dont carry umbrella")
// }

// //ternary operator
// //condition ? "if true" : "if false"

// isRaining ? console.log("carry Umbrella") : console.log("dont carry umbrella")

//short-circuit contion && "if left side ko condition true varyo"
isRaining && console.log("Carry umbrella")

//age > 21 , you can vote , else you cannot vote

//greater than
let agenumber = 22
    if(agenumber > 21) {
        console.log("you can vote")
    }
    else
    {
        console.log("you cannot vote")
    }



   // equals to 

    if( agenumber >= 21) {
        console.log("you can vote")
    }
    else
    {
        console.log("you cannot vote")
    }
//checks data type and value
    // if( agenumber === 22) {
    //     console.log("you can vote")
    // }
    // else
    // {
    //     console.log("you cannot vote")
    // }

    // let temperature = 40
    // if(temperature > 30 ) {
    //     console.log("over hot")
    // } 
    // else if ( temperature > 20){
    //     console.log("mid hot")
    // }
    // else{
    //     console.log("too cold")
    // }

let mydata ={
        name : "Ashwan Shrestha",
        age : 21,
        location : "kathmandu"
}

if(mydata.age >= 20 && mydata.location == "dharan" )
{
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}

if(mydata.age >= 20 || mydata.location == "kathmandu" )
{
    console.log("you can vote")
}
else{
    console.log("you cannot vote")
}


//ternary
mydata.age === 22 || mydata.adress == "kathmandu" || mydata.name == "Ashwan Shrestha" ?
console.log("you can vote in kathmandu") : console.log("you cannot vote in kathmandu")

//short-circuit
