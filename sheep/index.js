const express=require("express");
const app=express();
const http=require("http");


var SheepInfo={ name : "Billey", age:"5" , family :"Sheep"};
app.get("/",function(req,res){
	res.json(SheepInfo);
});

app.listen(8002,function(){
	console.log("Dog server running at 8002");
});