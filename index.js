const express = require("express");
const app = express();
const dbConnection = require("./config/config.js");
const PORT = 3000;
const postsRoutes = require("./routes/posts.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", postsRoutes);

dbConnection();

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

module.exports = app;