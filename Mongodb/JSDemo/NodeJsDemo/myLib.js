
// let name = "Pragati Gupta"
// module.exports = "Pragati Gupta"

// let name = "Amit Singh"
// let age = 23
// // module.exports = {name,age}
// //It gives object with name key and age key

// // module.exports = age //multiple variable banene par jo last export hoga bs whi print hoga so we make a array then it will print both values
// //Array Destructure
// module.exports = [name,age]

function myfun1(){
    console.log("Fun is Calling.....");
    
}
function myfun2(){
    console.log("Fun is Calling.....");
    
}
module.exports = [myfun1,myfun2]