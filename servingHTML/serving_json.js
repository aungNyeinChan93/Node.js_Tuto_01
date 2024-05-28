const http =require("http")

let server = http.createServer(function (req,res){
    res.writeHead(200,{"Content-type":"application/json"})
    const myObj = {
        name:"aung",
        age:30,
        gender:"male",
        email:"dfasdfa€@sadfad",
        family:{
            father:"U Ba",
            mother:"Daw Hla",
            sister:"Ma Su"
        },
        location:{
            city:"YGN",
            township:"thuwunna"
        }
    }
    res.end(JSON.stringify(myObj))
});

server.listen(4000,function(){
    console.log("server is running...");
})