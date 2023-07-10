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

//  try {
//         fs.appendFileSync('./txtFiles/input.txt', " - PW Skills");
//         console.log('success')
//  } catch (err) {
//     console.log(err)
//  }


// fs.unlink('./txtFiles/input.txt', (err) =>{
//     if(err) throw err;
//     console.log('Deleted');
// })

// fs.appendFile('./txtFiles/mytxt.txt', "This is the new file being created by appendFile", (err)=>{
//     if(err) throw err;
//     console.log("Successfully created");
// })

// fs.unlink('./txtFiles/mytxt.txt', (err) =>{
//     if(err) throw err;
//     console.log('Deleted')
// })

// let buffer = new Buffer.from('This is New file going to get created using fs.open');

// fs.open('./txtFiles/mytxt.txt', 'a', function(err, fd) {
//     if(err) throw err;

//     // fs.write(fd, buffer, 0, buffer.length, null, (err, bytes) =>{
//     //     if(err) throw "Can't write to file";
//     //     console.log(bytes, "Characters added to file");
//     // })

//     fs.write(fd, "This is the string i wanted to add", 0, 'utf-8', function(err, bytes){
//         if(err) throw err;
//         console.log(bytes, "added to file");
//     })
// })

const os = require('os');

console.log('CPU Architecture', os.arch());
console.log('Free Memory', os.freemem());
console.log('Total Memory', os.totalmem());
console.log('Temp Dir', os.tmpdir());

console.log('Os Platform -', os.platform());
console.log('Os Release -', os.release());
console.log('Os endianness -', os.endianness());
// console.log('Os Version -', os.version());
// console.log('Os Version -', os.cpus());

console.log('HostName', os.hostname())
console.log('Os Type', os.type())
