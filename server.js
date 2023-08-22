const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("¡Conectado a la base de datos!");
  })
  .catch((err) => {
    console.log("¡No se puede conectar a la base de datos!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido al API de Usuarios - IBK" });
});

require("./app/routes/users.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ejecutandose en el puerto ${PORT}.`);
});
