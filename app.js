var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var warning = require('./db').Warning;
var SAVE_DB = require('./database_save');
var cal = require('./calculate').calculate;

mongoose.connect('mongodb://localhost/NASA')

var CLR = {
 
  attitude  : '500m', 
  
  warning : {
    type : 'CLEAR',
    code : 0
  },
  
  //Manual Generated -- WebServices Update
  temp : '23C',

  wind_direction : '32 N',
  wind_speed : '120 KSPH',
    
  visibility : '0',
  humidity : '123KM',
  dew_point : '2.123',
  pressure: '3232P',

};

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
      for (var i=0; i < data.length; i++) {
        //for each one pass the long, lat to the function
        //console.log(data[i])
        mlat = data[i].latitude[0];
        xlat = data[i].latitude[1];
        mlong = data[i].longitude[0];
        xlong = data[i].longitude[1];

        //console.log(cal(latitude,longitude,mlat,mlong,xlat,xlong))

        if(cal(latitude,longitude,mlat,mlong,xlat,xlong))
          return res.send(data[i]);
        else
          continue;
      }
      return res.send(CLR);
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
                    else {
                    SAVE_DB.SheroukArea.save(function  (err,data) {
                      if(err)
                        return err;
                      else
                        res.send(data);

                        })}
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