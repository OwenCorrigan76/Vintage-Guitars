"use strict";
const accounts = require ('./accounts.js');
const uuid = require('uuid');
const logger = require("../utils/logger");
const guitarListStore = require("../models/guitar-store");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Dashboard",
      guitars: guitarListStore.getUserGuitarLists(loggedInUser.id)
    };
    logger.info("about to render", guitarListStore.getAllGuitarLists());
    response.render("dashboard", viewData);
  },

  deleteGuitarList(request, response) {
    const guitarListid = request.params.id;
    logger.debug(`Deleting GuitarList ${guitarListid}`);
    guitarListStore.deleteGuitarList(guitarListid);
    response.redirect("/dashboard");
  },

  addGuitarList(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newGuitarList = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      title: request.body.title,
      models: [],
    };
    guitarListStore.addGuitarList(newGuitarList);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;
