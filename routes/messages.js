var mongoose = require('mongoose');
mongoose.createConnection("mongodb://localhost:27017/node-angular", { useNewUrlParser: true })

var express=require("express"); 
var router=express.Router();

var Message=require('../models/message');

router.post('/', function (req, res, next) {
  var message = new Message({
      content: req.body.content
  });
  message.save(function(err, result){
      if(err)
      return res.status(500).json({
          title: "error occured",
          error: err
      });
      res.status(201).json({
          message:'saved message',
          obj: result
      });

  });
});
module.exports=router;