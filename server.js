const express = require("express");
const path = require("path");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
