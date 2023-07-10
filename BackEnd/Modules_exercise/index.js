const fs = require('fs');

//------------------ Reading files in async way using readFile()

// console.log('Line 1')

// fs.readFile('./txtFiles/input.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//         console.log("success");
//     }
// })

// ------------reading file in sync way using  readFileSync()

// console.log('Line 1');
//  const data = fs.readFileSync('./txtFiles/input.txt');
// console.log(data.toString());
// console.log('Line Last')


// --------------- opeaning file fs.open() and reading file fs.read and closing file fs.close()

// const buffer = new Buffer.alloc(1024);
// fs.open('./txtFiles/input.txt', 'r+', function(err, fd) {
//     if(err) throw err;

//     console.log("Reading file");

//     fs.read(fd, buffer, 0, buffer.length, 0, function(error, bytes){
//         if(error) throw error;

//         if(bytes > 0){

//             console.log("Data :", buffer.slice(0, bytes).toString());
//         }
//         console.log(bytes + " Bytes read");
//     })

//     fs.close(fd, (err)=>{
//         if(err) throw err;
//         console.log("File closed Successfully")
//     })

// })

//----------- Writting in file  fs.writeFile but it will override the whole file 

// fs.writeFile('./txtFiles/input.txt', "The file is updated", (err)=>{
//     if(err) throw err;
//     console.log('File is successfully updated');
// })

// ----- Appending in file, this will append the content in the existing content

// fs.appendFile('./txtFiles/input.txt', "by Sohel", "utf-8", (err)=>{
//     if(err) throw err;
//     console.log('Successfully Appended');
// })

 try {
        fs.appendFileSync('./txtFiles/input.txt', " - PW Skills");
        console.log('success')
 } catch (err) {
    console.log(err)
 }