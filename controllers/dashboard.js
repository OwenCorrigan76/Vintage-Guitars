"use strict";

const logger = require("../utils/logger");
//const guitarListCollection = require("../models/guitarlist-store");
const guitarListStore = require("../models/guitarlist-store");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Dashboard",
      guitars: guitarListStore.getAllGuitarLists()
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
};

module.exports = dashboard;
