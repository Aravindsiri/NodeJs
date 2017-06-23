var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/keshavdb');

var student= require('./student')

var keshav = new student ({name:'keshav',pastSchools:["bhashyam"]});
keshav.save(function(err)
{
if(err)
{
console.log(err);
}
});
student.find({"name":'keshav'}).exec(function(err,result){

console.log(result);

});


