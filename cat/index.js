const express=require("express");
const app=express();
const http=require("http");

var catInfo={ name : "Kitty Simba", age:"4" , family :"Cat"};
app.get("/",function(req,res){
	res.json(catInfo);
});

app.listen(8001,function(){
	console.log("Cat server running at 8001");
});