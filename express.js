var express=require('express');
var app=express();
app.get('/',function(req,res)
{
    res.send('Hello World! express');

});

app.get('/NEW',function(req,res)
{
    res.send('Hello World! NEW');

});

var server=app.listen(3000,function()
{});
console.log('Server Up')