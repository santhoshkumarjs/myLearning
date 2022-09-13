const fs = require('fs');

//BLOCKING CODE
let filedata = fs.readFileSync('./sample.txt');
console.log(filedata.toString());
console.log("file read done");

//NON-BLOCKING CODE
let filedata_1 = fs.readFile('./sample.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log("line executed");
