var request = require('supertest');// to make api call
var app = require('./GETwithParams.js').app;
var excpect = require('chai').expect;

describe('getRequestTest',function(){
 it('should fetch file details', function(done){
 request(app)
            .get('/')
            .except('200')
            .except('content-type','text/html;charset=utf-8')
            .end(fucntion (err,res){
            if(err){
            return done(err);
            }
            done();
            })
 
 })

});
//npm install super test 
//npm install chai 