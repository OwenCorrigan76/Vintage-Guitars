'use strict'
const uuid = require('uuid');

const logger = require('../utils/logger');
const guitarListStore = require('../models/guitar-store.js');

const guitars = {
  index(request, response) {
    const guitarListId = request.params.id;
    logger.info('Guitars List id = ' + guitarListId);
    const viewData = {
      title: 'Guitars',
      guitars: guitarListStore.getGuitarList(guitarListId),
    };
    console.log('ID....' + guitarListStore)
    response.render('guitars', viewData);
  },

  deleteModel(request, response) {
    const guitarListId = request.params.id;
    const modelId = request.params.modelid;
    logger.debug(`Deleting Model ${modelId} from Guitars ${guitarListId}`);
    guitarListStore.deleteModel(guitarListId, modelId);
    response.redirect('/guitars/' + guitarListId);
  },

  addModel(request, response) {
    const guitarListId = request.params.id;
    const guitars = guitarListStore.getGuitarList(guitarListId);
    const newModel = {
      id: uuid.v1(),
      title: request.body.title,
      type: request.body.type,
      year: request.body.year,
      price: Number(request.body.price),
    };
   guitarListStore.addModel(guitarListId, newModel);
   response.redirect('/guitars/' + guitarListId);
  },

 };

module.exports = guitars;
