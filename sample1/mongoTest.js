var express = require('express');
var app = express();
var fs=require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/keshavdb';
app.get('/', function(req,res){
MongoClient.connect(url, function(err, db)

{
  var collection =db.collection("actors");
    collection.find({}).toArray(function(err, docs)
    {
    console.log('found the following records');
    console.log(docs);


db.close();
});
});
})
app.listen(3000, function (){
console.log('hey!! hello keshav the server  started at port 3000')
})
exports.app=app;
