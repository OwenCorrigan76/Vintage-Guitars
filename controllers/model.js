"use strict";

const logger = require("../utils/logger");
const guitarListStore = require("../models/guitar-store");

const model = {
  index(request, response) {
    const guitarListId = request.params.id;
    const modelId = request.params.modelid;
    logger.debug(`Editing Model ${modelId} from Guitar ${guitarListId}`);
    const viewData = {
      title: "Edit Model",
      guitars: guitarListStore.getGuitarList(guitarListId),
      model: guitarListStore.getModel(guitarListId, modelId)
    };
    response.render("model", viewData);
  },

  update(request, response) {
    const guitarListId = request.params.id;
    const modelId = request.params.modelid;
    const model = guitarListStore.getModel(guitarListId, modelId)
    const newModel = {
      title: request.body.title,
      type: request.body.type,
      year: request.body.year,
      price: Number(request.body.price)
    };
    logger.debug(`Updating Model ${modelId} from Guitars ${guitarListId}`);
    guitarListStore.updateModel(model, newModel);
    response.redirect("/guitars/" + guitarListId);
  }
};

module.exports = model;