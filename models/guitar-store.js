"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const guitarListStore = {

  store: new JsonStore("./models/guitar-store.json", { guitarListCollection: [] }),
  collection: "guitarListCollection",

  getAllGuitarLists() {
    return this.store.findAll(this.collection);
  },

  getGuitarList(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addGuitarList(guitars) {
    this.store.add(this.collection, guitars);
    this.store.save();
  },

  deleteGuitarList(id) {
    const guitars = this.getGuitarList(id);
    this.store.remove(this.collection, guitars);
    this.store.save();
  },

  deleteAllGuitarLists() {
    this.store.removeAll(this.collection);
    this.store.save();
  },

  addModel(id, model) {
    const guitars = this.getGuitarList(id);
    guitars.models.push(model);

    let price = 0;
    for (let i = 0; i < guitars.models.length; i++) {
      price += guitars.models[i].price;
    }
    guitars.price = price;
    this.store.save();
  },

  deleteModel(id, modelId) {
    const guitars = this.getGuitarList(id);
    const models = guitars.models;
    _.remove(models, { id: modelId });
    this.store.save();
  },

  getUserGuitarLists(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },

  getModel(id, modelId) {
    const guitars = this.store.findOneBy(this.collection, { id: id });
    const models = guitars.models.filter(model => model.id == modelId);
    return models[0];
  },

  updateModel(model, updatedModel) {
    model.title = updatedModel.title;
    model.type = updatedModel.type;
    model.year = updatedModel.year;
    model.price = updatedModel.price;
    this.store.save();
  }
};

module.exports = guitarListStore;