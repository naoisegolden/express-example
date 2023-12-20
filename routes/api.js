var express = require('express');
var router = express.Router();

/* GET /api */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: "Hello API" });
});

module.exports = router;
