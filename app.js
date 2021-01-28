const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res) => {


    console.log('request');
    res.setHeader('content-type','application/html');
    res.write('<h1>Hi</h1>');
    res.end();

})


server.listen(4000,'localhost');
// fs.readFile('./people.js', (err,data) => {
//     console.log(data.toString());
// })

// console.log("lastttt")

// fs.writeFile('./people.js','Hi there')


// if(fs.existsSync('./people.js')){
//     fs.unlink('./people.js',(err)=> {
//         if(err)
//             console.log(err)
//         else
//             console.log("Deletes");
//     })
// }









// const server = http.createServer((req,res) => {
//     const url = req.url;
//     if(url == '/'){
//         res.write("<h1>Here?</h1>");
//         res.write("<form action='/message' method='post'>");
//         res.write("<input type='text' name='message'>");
//         res.write("<input type='submit' value='Click'>");
//         res.end();
//     }
//     if(url == '/message')
//     {
//         const body = [];
//         req.on('data',(chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         req.on('end', ()=>{
//             const parsebody = Buffer.concat(body).toString();
//             console.log(parsebody);

//         });
//     }
// })
//server.listen(3000);
// const greet = (name) => {
//     console.log(`Hello, $(name)`,name);
// }
// greet('tvd');