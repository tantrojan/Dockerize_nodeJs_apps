const express=require("express");
const app=express();
const http=require("http");


var GoatInfo={ name : "Smokey Bing", age:"8" , family :"Goat"};
app.get("/",function(req,res){
	res.json(GoatInfo);
});

app.listen(8003,function(){
	console.log("Goat server running at 8003");
});