const express=require("express");
const app=express();
const http=require("http");

app.get("/callcat",function(req,res){

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
	var options = {
	  host: 'localhost',
	  path: '/',
	  port:'8001'
	};

	callback = function(response) {

	  //another chunk of data has been recieved, so append it to `str`
	  response.on('data', function (chunk) {
	    str = JSON.parse(chunk);
	  });

	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {
	    console.log(str);
	  });
	}

	http.request(options, callback).end();
	res.send({ message : "Cat Info received", info : str }) ;
});

app.get("/callsheep",function(req,res){

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
	var options = {
	  host: 'localhost',
	  path: '/',
	  port:'8002'
	};

	var str = '';
	callback = function(response) {
	  

	  //another chunk of data has been recieved, so append it to `str`
	  response.on('data', function (chunk) {
	    str = JSON.parse(chunk);
	  });

	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {
	    console.log(str);
	  });
	}

	http.request(options, callback).end();
	res.send({ message : "Sheep Info received", info : str});
});

app.get("/callgoat",function(req,res){

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
	var options = {
	  host: 'localhost',
	  path: '/',
	  port:'8003'
	};

	var str = '';
	callback = function(response) {
	  

	  //another chunk of data has been recieved, so append it to `str`
	  response.on('data', function (chunk) {
	    str = JSON.parse(chunk);
	  });

	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {
	    console.log(str);
	  });
	}

	http.request(options, callback).end();
	res.send({ message : "Goat Info received", info : str});
	
});
app.listen(8000,function(){
	console.log("Master server running at 8000");
});