<!---Camden Gilliam helped set up API route to Index home page--->
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
      console.log("Data", data)

           res.render("recipes", {data:data});
      })
    .catch(function(err){
      console.log("DATA ERROR:", err)
      req.flash("danger", "OOPS, Please check your search terms and try again.")
      res.redirect("/")
    })
});



 router.get(['/'], (req, res) => {
	res.render('index', { user: req.user });
});

router.get('/about', (req, res) => {
	res.render('about', { user: req.user });
});


module.exports = router;
