var express = require("express");
var router = express.Router();
var Cerveja = require("../models/Cerveja");

/* GET página do formulário de adição 
  http://localhost:4000/form
*/

router.get("/form", function (req, res, next) {
  res.render("add", { title: "Fórmulário" });
});

/**
  http://localhost:4000/add
 */

router.post("/add", function (req, res, next) {
  Cerveja.create({
    data: req.body.data,
    temperaturaminima: req.body.temperaturaminima,
    temperaturamaxima: req.body.temperaturamaxima,
    precipitacao: req.body.precipitacao,
  })
    .then(function () {
      console.log("Cerveja cadastrada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao cadastrar a cerveja. Erro: " + error);
    });
});

module.exports = router;
