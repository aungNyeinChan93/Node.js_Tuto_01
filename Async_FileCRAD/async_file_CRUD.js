const fs = require("fs");

fs.writeFile("./test01.txt","this is my async file write/create. ",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully File created ... ");
    }
});

fs.readFile("./test01.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});

const myAppendData = "this is my append data"
fs.appendFile("./test01.txt",myAppendData,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("File appened success!");
    }
});

// error >>>
fs.readFile("./test012.txt","utf-8",(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});



