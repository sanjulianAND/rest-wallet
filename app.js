const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("./config/config");
const walletRoutes = require("./routes/walletRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api/wallet", walletRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Servidor REST corriendo en http://localhost:${config.port}`);
});
