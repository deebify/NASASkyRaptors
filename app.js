var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var warning = require('./db').Warning;
var SAVE_DB = require('./database_save');
mongoose.connect('mongodb://localhost/NASA')


var app = express();


//-------------------------------------------------------------
app.get('/', function  (req,res,next) {

  //Query Points
  latitude = req.query.lat;
  longitude = req.query.long;


  

  warning.find(function  (err,data) {
    if(err)
      console.log(err)
    else {
      for (var i=0 ; i <= data.length; i++) {
        console.log(data[i])
        console.log('--------')
      };
      res.send(data);
    }
  })

});



app.get('/save',function  (req,res,next) {
  

  SAVE_DB.Salam.save(function  (err,data) {
    if(err)
        return err;
      else{
        SAVE_DB.AirPort.save(function  (err,data) {
          if(err)
            return err
          else{
            SAVE_DB.Juzirra.save(function  (err,data) {
              if(err)
                return err;
              else{
                  SAVE_DB.WaterArea.save(function  (err,data) {
                    if(err)
                      return error;
                    else 
                      res.send(data);
                  });
              }
            });
          }
        });
      }
    });
});



//-------------------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = app;


app.listen(9000,  function  () {
  console.log('NASA App Started .. ');
});