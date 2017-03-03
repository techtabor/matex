var express = require('express');
var app = express();
var router = express.Router();
  
var path = __dirname;
  
app.use('/',router);
  
router.get('/',function(req, res){
  res.sendFile(path + '/frontend_cdn.html');
});
  
router.get('/kezdolap',function(req, res){
  res.sendFile(path + '/frontend_kezdolap.html');
});
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});