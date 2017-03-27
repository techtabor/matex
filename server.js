var express = require('express');
var app = express();
var router = express.Router();
  
var path = require('path');
console.log(path);

app.use('/',router);
app.use(express.static(path.join(__dirname, 'public')));

  
router.get('/',function(req, res){
  res.sendFile(__dirname + '/views/frontend_cdn.html');
});
  
router.get('/kezdolap',function(req, res){
  res.sendFile(__dirname + '/views/frontend_kezdolap.html');
});
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});