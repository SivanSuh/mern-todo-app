const express = require("express");
const {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
} = require("../Controllers/notesController");

const router = express.Router();

router.get("/", notlarGetir);

router.get("/:id", notGetir);

router.post("/", notOlustur);

router.delete("/:id", notSil);

module.exports = router;
