var express = require("express");
var app     = express();
app.set('view engine','pug');
//var path    = require("path"); //used when path referenced.

app.use(express.static(__dirname + '/Views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.


app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.get('/about',function(req,res){
  //res.sendFile(path.join(__dirname+'/views/about.html'));
  res.sendFile('/about.html');
});

app.get('/sitemap',function(req,res){
  //res.sendFile(path.join(__dirname+'/views/sitemap.html'));
  res.sendFile('/sitemap.html');
});

app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
   
       name: "TutorialsPoint", 
       subname:"Sub Title h2",
       content:"This is just some content",
       url:"http://www.tutorialspoint.com",
       textbox:"box1"

    });
 });

app.listen(3000);

console.log("Running at Port 3000");

