const express = require("express");

// dotenv
const config = require("./config/config");

// cors
const cors = require("cors");

// sequelize
const { sequelize } = require("./models/");

// Routes
const routerPost = require("./Routes/post.route");
const routerUser = require("./Routes/user.route");
const routerAuth = require("./Routes/auth.route");

const app = express();

require("./utils/initialSetup");

require("./middleware/auth");
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(routerPost);
app.use(routerUser);
app.use(routerAuth);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log(`Error connecting to db: ${error}`);
  });

app.listen(config.PORT, () => {
  console.log(`Server listening port ${process.env.PORT}`);
});
