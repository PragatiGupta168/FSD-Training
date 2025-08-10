//File handling is used to store data 
//fs humara inbuilt module hai 
const fs = require('fs')
let str = 'A quick brown fox jumps over the lazy dog'
// fs.writeFile('Test.txt', str+"\n", (err)=>{
    fs.appendFile('Test.txt', str+"\n", (err)=>{
    if(err)
        console.log(err);
    else 
        // console.log("Data Saved");
        console.log('Data Append in File');
})


fs.readFile('Test.txt', (error, data)=>{
    if(error)
        console.log("Error Occured..."+error);
    else
        console.log(data.toString());
})