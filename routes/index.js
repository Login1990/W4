var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipe/:food", (req,res,next) => {
  let feedback = {
    name: req.params.food,
    instructions: ["boil water","beans","graveyard"],
    ingredients: ["beans","marmite","blakc troufel oil"]
  }
  return res.json(feedback)
})

module.exports = router;
