var express = require('express')
var app = express();
var fs =require('fs');

app.get('/', function (req , res ){
    fs.readFile('input.txt',function(err,data){
        if (err){
            return console.error(err);
        } 
          res.send(data.toString());
    });
})|
    
app.listen(3000, function (){
console.log('Hey !! Server started at port 3000!!');
});