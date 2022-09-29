const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const noteRoutes = require("./routes/apiRoutes/noteRoutes");
const htmlRoutes = require("./routes/htmlRoutes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use noteRoutes
app.use("/api", noteRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
