const mongoose = require("mongoose");

const Person = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    temperaturaminima: {
      type: String,
      required: true,
    },
    temperaturamaxima: {
      type: String,
      required: true,
    },
    precipitacao: {
      type: String,
      required: true,
    },
  },
  { collection: "cerveja" }
);

module.exports = mongoose.model("Cerveja", Cerveja);

