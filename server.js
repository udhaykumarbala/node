var express = require('express');
var app = express();


app.get('/',function(req,res){
	res.json("hello");
});

app.listen(80, function(err) {
	if(err) throw err;
	console.log("run successfully");
});