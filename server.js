var http = require('http');
var ejs = require('ejs');
var request = require('request');
var cheerio = require('cheerio');
var url = "https://www.reddit.com/";
var express = require("express");
var app = express();
app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  var itemArray = [];

    request(url, function (error, response, body) {
      //(can use either body or html)

      if (!error) {
        var $ = cheerio.load(body);
          // temperature = $("[data-variable='temperature'] .wx-value").html();
          
       
          // for (i=0; i<=20; i++){
          // 	titles = $("a.title"[i]).html();
          

          $('a.title').each(function(i, elm) {
          // console.log($(this).html());
           // for testing do text() 
          // res.render('index', { title: $(this).html() });
          item = $(this).text();
          itemArray.push(item);
          
    		  });

      } else {
        console.log("We’ve encountered an error: " + error);
      }

      // console.log(itemArray);
  res.render('index', { itemArray: itemArray });
    });


// res.json($(this).html());


});


app.listen(8080,function(){
  console.log('Server Started on http://localhost:8080');
  console.log('Press CTRL + C to stop server');
  });


