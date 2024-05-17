const express = require("express");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// About page route
router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Contact page route
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

// Fallback route for undefined routes
router.use((req, res, next) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

module.exports = router;
