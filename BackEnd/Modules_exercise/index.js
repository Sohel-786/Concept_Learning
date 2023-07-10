const fs = require('fs');

// console.log('Line 1')

// fs.readFile('./txtFiles/input.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//         console.log("success");
//     }
// })

// console.log('Line 1');
//  const data = fs.readFileSync('./txtFiles/input.txt');
// console.log(data.toString());
// console.log('Line Last')

const buffer = new Buffer.alloc(1024);
fs.open('./txtFiles/input.txt', 'r+', function(err, fd) {
    if(err) throw err;

    console.log("Reading file");

    fs.read(fd, buffer, 0, buffer.length, 0, function(error, bytes){
        if(error) throw error;

        if(bytes > 0){

            console.log("Data :", buffer.slice(0, bytes).toString());
        }
        console.log(bytes + " Bytes read");
    })

    fs.close(fd, (err)=>{
        if(err) throw err;
        console.log("File closed Successfully");
    })

})