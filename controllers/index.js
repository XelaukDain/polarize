const path = require("path");
const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const { sendFile } = require("express");
router.use("/", homeRoutes);

module.exports = router;