var express = require('express');
var router = express.Router();
var path = require("path");/*path模块，处理路由路径的模块*/
var media = path.join(__dirname,"../public/media");

/* GET home page. 路由控制获取音乐的列表返回给前端控制*/
router.get('/', function(req, res, next) {
  var fs = require("fs");
  fs.readdir(media,function(err,names){
  	if(err){
  		console.log(err);
  	}else{
  		res.render('index', { title: 'Passionate Music', music: names });/*成功的话就返回给前端数据*/
  	}
  })
  
});

module.exports = router;
