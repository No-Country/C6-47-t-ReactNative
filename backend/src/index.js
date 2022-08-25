const express = require("express");
const https = require("https");
const fs = require("fs");
const optionsHTTPS = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// dotenv
const config = require("./config/config");

// cors
const cors = require("cors");

// sequelize
const { sequelize } = require("./models/");

// Routes
const routers = require("./Routes");

const app = express();

require("./utils/initialSetup");

require("./middleware/auth");
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use([routers.auth, routers.post, routers.user]);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log(`Error connecting to db: ${error}`);
  });

const httpsServer = https.createServer(optionsHTTPS, app);

httpsServer.listen(config.PORT, () => {
  console.log(`Server listening port ${process.env.PORT}`);
});
