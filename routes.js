"use strict";

const express = require("express");
const router = express.Router();
const playlist = require('./controllers/playlist.js');
const guitars = require('./controllers/guitars.js');
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");


router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get('/dashboard/deleteGuitarList/:id', dashboard.deleteGuitarList);

router.get("/about", about.index);
router.get('/playlist/:id', playlist.index);
router.get('/guitars', guitars.index);
router.get('/guitars/:id', guitars.index);
router.get('/guitars/:id/deletemodel/:modelid', guitars.deleteModel);



module.exports = router;
