var express = require("express");
var router = express.Router();
var Cerveja = require("../models/Cerveja");

/* GET página do formulário de edição com os dados que estão na tabela 
  http://localhost:4000/edit/:id
*/

router.get("/edit/:id", function (req, res, next) {
  Cerveja.findById(req.params.id)
    .then((cerveja) => {
      res.render("edit", {
        title: "Fórmulário de Edição",
        id: req.params.id,
        data: person.data,
        temperaturaminima: person.temperaturaminima,
        temperaturamaxima: person.temperaturamaxima,
        precipitacao: person.precipitacao,
      });
    })
    .catch((error) => {
      res.send("Erro ao localizar a cerveja. Erro: " + error);
    });
});

/**
Para realizar a edição do dado na tabela
  http://localhost:4000/edition/:id
 */

router.post("/edition/:id", function (req, res, next) {
  Cerveja.update(
    {
      data: req.body.data,
      temperaturaminima: req.body.temperaturaminima,
      temperaturamaxima: req.body.temperaturamaxima,
      precipitacao: req.body.precipitacao,
    }
    ,
    { where: { id: req.params.id } }
  )
    .then(function () {
      console.log("Cerveja atualizada com sucesso!");
      res.redirect("/list");
    })
    .catch(function (error) {
      res.send("Erro ao atualizar a Cerveja. Erro: " + error);
    });
});

module.exports = router;
