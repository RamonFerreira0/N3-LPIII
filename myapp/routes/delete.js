var express = require("express");
var router = express.Router();
var Cerveja = require("../models/Cerveja");

router.get("/delete/:id", function (req, res, next) {
  Cerveja.deleteOne({ _id: req.params.id })
    .then(function () {
      res.redirect("/list");
    })
    .catch((error) => {
      res.send("Erro ao excluir a cerveja. Erro: " + error);
    });
});

module.exports = router;
