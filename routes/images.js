var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('se va a hacer un fetch')
    fetch('http://localhost:5000/images', {method: 'GET'})
        .then(function(result){
          return result.json()
        })
        .then(function(result) {
            console.log(result)
            res.send(result);
        })
});

module.exports = router;
