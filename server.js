var express=require("express");
const app=express();
app.get('/',function(req,res){
    res.send("<h1>Welcome</h1>");
    res.end();
});
app.listen(3400);
console.log("server is listening at port 3400");
