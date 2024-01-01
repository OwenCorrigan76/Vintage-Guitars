"use strict";

const express = require("express");
const router = express.Router();
const accounts = require('./controllers/accounts.js');
const guitars = require('./controllers/guitars.js');
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const model = require("./controllers/model.js");

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
//router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get('/dashboard/deleteGuitarList/:id', dashboard.deleteGuitarList);
router.post('/dashboard/addGuitarList', dashboard.addGuitarList);

router.get("/about", about.index);
router.get('/guitars', guitars.index);
router.get('/guitars/:id', guitars.index);
router.post('/guitars/:id/addModel', guitars.addModel);
router.get('/guitars/:id/deletemodel/:modelid', guitars.deleteModel);
router.get("/model/:id/editmodel/:modelid", model.index);
router.post("/model/:id/updatemodel/:modelid", model.update);

module.exports = router;
