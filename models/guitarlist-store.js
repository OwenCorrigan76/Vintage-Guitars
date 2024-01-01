"use strict";
const _ = require("lodash");

const guitarListStore = {
  guitarListCollection: require("./guitar-store.json").guitarListCollection,

  getAllGuitarLists() {
    return this.guitarListCollection;
  },

  getGuitarList(id) {
    return _.find(this.guitarListCollection, { id: id });
  },

  addModel(id, model) {
    const guitars = this.getGuitarList(id);
    guitars.models.push(model);
  },

  deleteModel(id, modelId) {
    const guitars = this.getGuitarList(id);
    _.remove(guitars.models, { id: modelId });
  },


  addGuitarList(guitars) {
    this.guitarListCollection.push(g);
  },
  deleteGuitarList(id) {
    _.remove(this.guitarListCollection, { id: id });
  },
};

module.exports = guitarListStore;
