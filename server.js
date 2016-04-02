var http = require('http');
var ejs = require('ejs');
var request = require('request');
var cheerio = require('cheerio');
var url = "https://www.reddit.com/";
var express = require("express");
var app = express();
app.set('view engine', 'ejs');
<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));


try{
  var env = require('./config/env_dev');
}
catch(err){
  var env = require('./config/env_prod');
}
=======
>>>>>>> 39f6c2bc5552bbb45141e80f71d970f963602254



app.get('/', function(req, res) {
  var itemArray = [];

    request(url, function (error, response, body) {

      if (!error) {
        var $ = cheerio.load(body);

          $('a.title').each(function(i, elm) {
          // console.log($(this).html());
          item = $(this).text();
          itemArray.push(item);
    		  });

      } else {
        console.log("We’ve encountered an error: " + error);
      }

    // console.log(itemArray);
    res.render('index', { itemArray: itemArray });
    });
});


app.listen(env.port,function(){
  console.log('Listening on '+env.host+':'+env.port);
  console.log('Stop Server With CTRL + C');
});

