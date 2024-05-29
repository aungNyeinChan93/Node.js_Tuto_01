let express = require("express")

let app = express();

app.get("/",(req,res)=>{
    res.send("this is express ...")
});

app.get("/about",function(req,res){
    res.send("About Page")
});

app.get("/admin",function(req,res){
    res.send("Admin Page" +res.status)
});

app.get("/contact",function(req,res){
    res.send("Contact Page")
})

app.get("/*",function(req,res){
    res.send("Error Page")
})

app.listen(3000)
