var express = require("express");
var router = express.Router();
var { generateUsername } = require("unique-username-generator");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//GET randomize username
router.get("/random", function (req, res, next) {
  let name = generateUsername();
  let body = { name };
  res.json(body);
});

module.exports = router;
