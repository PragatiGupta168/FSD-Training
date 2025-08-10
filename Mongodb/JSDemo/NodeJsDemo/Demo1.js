//WHAT IS NODE.JS?

//Node js is a server side runtime environment built on Google chrome's javascript engine(v8 Engine)
//Node.js was developed by Ryan Dahl in 2009 and its latest version is v20.9.0
//Node.js is a cross platform(run on windows, linux,unix, macos and more) , open source, backend javascript runtime environment that executes javascript code outside a web browser.

//FEATURES of Node.js

//ASYNCHRONOUS(NON-BLOCKING CODES) AND EVENT DRIVEN:All apis od node.js library are asynchronous, that is non-blocking. It essentially means a node.js based server
//never waits for an api to return data. The server moves to the next api calling it and a notofication mechanism of evemts of node.js helps the server to get a response 
//from the orevious api calling.

//VERY FAST:Node.js library is very fast code execution.

//SINGLE-THREADED BUT HIGHLY SCALABLE:It uses a single threaded program and the same program can provide service to a much larger no of request
//than traditional servers like APACHE HTTP server.

//NO BUFFERING:Node.js application never buffer any data.These applications simply output the data in chunks.

//In CMD we use REPL (READ EVALUATE PRINT LOOP )
//.editor : // Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
//> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
// let count = 0
// while (count<=10)
// {
// console.log(count)
// count++
// }
//Output by using ctrl+D and  Ctrl+C to cancel editor
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 10
// > for(let i =1; i<=10; i++)
// ... .break (kisi loop se bhr aana hai toh hum .break ka use karnge)
// >
//FOR SAVING THE FILE IN THE CURRENT DIRECTORY
// for(let i =1; i<=10; i++)
// .....break
// > let name = 'Sachin'
// undefined
// > let age = 45
// undefined
// > let email = 'sachin@gmail.com'
// undefined
// > .save D:\\JSCmd.js
// Session saved to: D:\\JSCmd.js

// console.log("Hello World...")

//How to import and export in node.js
// Yaha do file hai myLib and Demo1
//myLib file hai aur usme humne yh let kiya hai let name = 'Pragati'
//ab hum phele isko export karnge uske baad kisi doosri file mei import karenge by using this [module.exports = name]
//and then import karenge Demo1 wali file mei 

// let a = require('./myLib')
// console.log(a);
// console.log(a.name);
// console.log(a.age);

// let {a,b} = require('./myLib')//{a,b} is destructuring and require('./myLib') is a object
// console.log(a);//Output gives undefined 


// let {age,name} = require('./myLib')
// console.log(age);
// console.log(name);

// let [a,b] = require('./myLib')
// console.log(a);
// console.log(b);//Array Destructure

//FUNCTIONS

// let fn = require('./myLib')
// console.log(fn);
// // fn()//when we declare fn() then function is calling....
// fn[0]()
// fn[1]()//Here Both functions are calling for array 

//By using destructurting method
// let [f1,f2] = require('./myLib')
// f1()
// f2()

let [myfun1,myfun2] = require('./myLib')
myfun1()
myfun2()





