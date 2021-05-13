var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

const API_KEY = process.env.RECIPES_API_KEY || "abc123" // obtain your own api key and set via environment variable

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET recipes. */

router.get('/', function(req, res, next) {

  var requestUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}` // using string interpolation here, but you could alternatively do concatenation with + operators
  console.log("REQUEST URL", requestUrl)

  fetch(requestUrl)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log("STOCK DATA SUCCESS", Object.keys(data))
      //   var latestClose = Object.values(data["Time Series (Daily)"])[0]["5. adjusted close"]
      //   req.flash("success", "Stock Data Request Success!")
           res.render("recipes", {data: JSON.stringify(data)});
      })
    .catch(function(err){
      console.log("STOCK DATA ERROR:", err)
      req.flash("danger", "OOPS, Please check your inputs and try again.")
      res.redirect("/stocks/form")
    })
});

module.exports = router;
