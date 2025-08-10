
const { log } = require('@tensorflow/tfjs')
const fs = require('fs')
let str = 'A quick brown fox jumps over the lazy dog'

//FOR THE CREATION OF DIRECTORY
// fs.mkdir('DemoFolder',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Directory Created");
// })

//Exist Directory
// if(!fs.existsSync('DemoFolder')){
//     fs.mkdir('DemoFolder',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Directory Created");
// })
// }
// else{
// console.log("Folder Already exist");
// }


//TO REMOVE FOLDER
fs.rmdir('DemoFolder',(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Folder Deleted");
})


// // fs.writeFileSync('Sync.txt', str+"\n")

// // const data = fs.readFileSync('Sync.txt' )
// // console.log(data.toString());

// // fs.appendFileSync('Sync.txt', str+"\n")

// // fs.unlink('Sync.txt',(err)=>{//It is used for delete the file
// //     if(err)
// //         console.log(err);
// //     else
// //         console.log('File Deleted..');
// // })


// if(fs.existsSync('Sync.txt')){
// fs.unlink('Sync.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File deleted..');
// })
// }
// else
//     console.log('File not exist..');