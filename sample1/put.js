var express = require('express');
var app = express();
fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.put('/', function(req,res){
    
    fs.writeFile('helloworld.txt','keshav', function(err){
        if(err){response= err;}
        else{
            response="write sucessfull";
        }
        res.send(response);
    });
})
app.listen(3000,function(){
    console.log("hey!! Server started at port 3000")
})
exports.app=app;