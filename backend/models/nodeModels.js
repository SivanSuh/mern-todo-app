const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const notSema = new Sema(
  {
    baslik: {
      type: String,
      required: true,
    },
    aciklama: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSema);
