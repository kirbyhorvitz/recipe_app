//Camden Gilliam helped set up API route to Index home page
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
var ourRecipes = require('../data/ourRecipes.json')

const API_KEY = process.env.RECIPES_API_KEY || "abc123" // obtain your own api key and set via environment variable

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET our recipes page. */
router.get('/ourrecipes', function(req, res, next) {
  res.render('ourrecipes', {data: ourRecipes});
});


router.get('/ourrecipes/:id', function(req, res, next) {
 //recipe id is in req.params.id

 let data = null;
 for (var i=0; i < ourRecipes.length; i++ ) {
   if (ourRecipes[i].id == req.params.id) {
     data = ourRecipes[i]
   }
 }

 res.render('recipe', {data:data});


})

/* GET recipes. */

router.get('/recipelist', function(req, res, next) {

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
      res.redirect("recipelist")
    })
});



 router.get(['/'], (req, res) => {
	res.render('index', { user: req.user });
});

router.get('/about', (req, res) => {
	res.render('about', { user: req.user });
});

router.get('/ourrecipes', (req, res) => {
	res.render('ourrecipes', { user: req.user });
});

router.get('/recipelist', (req, res) => {
	res.render('recipelist', { user: req.user });
});

module.exports = router;


