var express = require("express");
var router = express.Router();
var Cerveja = require("../models/Cerveja");

/* GET página de listagem de pessoas 
  http://localhost:4000/list
*/

router.get("/list", function (req, res, next) {
  Cerveja.find().then(function (cerveja) {
    res.render("list", { title: "Listagem de Cervejas", cerveja: cerveja });
    console.log(cerveja);
  });
});

module.exports = router;
