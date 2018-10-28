
var express=require('express');
var app=express();


var promise = require("bluebird");
var request=require('request');
var URL='https://api.genius.com/search?q=Kendrick%20Lamar&access_token=pV-BGKyPxkPStJxwDGQfzXSVZzI_JEjkFkE80LLfnokGe1QBCbz1D4ir9QttkShe';
promise.promisifyAll(request,URL);


app.get('/',function(req,res)
{
    res.send('Hello World! express');
    request.getAsync(URL,function(error,response,body)
  {
  console.log(body);
  var obj =JSON.parse(body);
  console.log(obj);
  });

});

var server=app.listen(3020,function()
{});
console.log('Server Up')









