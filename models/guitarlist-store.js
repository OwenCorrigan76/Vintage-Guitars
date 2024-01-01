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

  deleteModel(id, modelId) {
    const guitars = this.getGuitarList(id);
    _.remove(guitars.models, { id: modelId });
  },

  deleteGuitarList(id) {
    _.remove(this.guitarListCollection, { id: id });
  },
};

module.exports = guitarListStore;
