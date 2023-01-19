require("dotenv").config();
const express = require("express");
const noteRoutes = require("./routes/notes");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("strictQuery", false);

const app = express();
app.use(cors());

app.use((req, res, next) => {
  // console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use("/api/notlar", noteRoutes);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Veri tabanı Baglandı");
    app.listen(process.env.PORT, () =>
      console.log(`${process.env.PORT}.portunda dinleniyor`)
    );
  })
  .catch((err) => console.log(err));
