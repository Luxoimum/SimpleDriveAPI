var express = require('express');
var router = express.Router();
var http = require('http')
var request = require('request')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  http.get('http://localhost:5000/images', function(result) {
    if (result.statusCode === 200) {
      var rawData = ''
      result.on('data', function(chunk) {
        rawData += chunk
      })
      result.on('end', function() {
        try {
          console.log(typeof rawData)
          res.send(rawData.trim())
        } catch (e) {
          console.error(e.message)
        }
      })
    }
  })
});
router.get('/:img', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  var img = req.params.img
  console.log(img)
  var options = {
    url: 'http://localhost:5000/images/' + img,
    encoding: null
  }
  request.get(options, function(error, response, body){
    if (!error && response.statusCode === 200) {
      res.set('Content-Type', 'image/jpeg')
      res.send(body)
    }
  })
});

module.exports = router;
