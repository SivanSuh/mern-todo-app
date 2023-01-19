const mongoose = require("mongoose");
const NotModel = require("../models/nodeModels");

const notOlustur = async (req, res) => {
  const { baslik, aciklama } = req.body;

  try {
    const not = await NotModel.create({ baslik, aciklama });
    res.status(200).json(not);
  } catch (e) {
    res.status(400).json({ hata: e.message });
  }
};

const notlarGetir = async (req, res) => {
  const notlar = await NotModel.find();

  res.status(200).json(notlar);
};

const notGetir = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID Geçersiz" });
  }

  const not = await NotModel.findById(id);

  if (!not) {
    return res.status(404).json({ hata: "Not Bulunamadı" });
  }

  res.status(200).json(not);
};

const notSil = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID Geçersiz" });
  }

  const not = await NotModel.findOneAndDelete({ _id: id });

  if (!not) {
    return res.status(400).json({ hata: "Not Bulunamadı" });
  }

  res.status(200).json(not);
};

module.exports = {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
};
