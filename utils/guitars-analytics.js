"use strict";

const guitarListAnalytics = {

  getCheapestGuitar(guitars) {
    let cheapestGuitar = null;
    if (guitars.models.length > 0) {
      cheapestGuitar = guitars.models[0];
      for (let i = 1; i < guitars.models.length; i++) {
        if (guitars.models[i].price < cheapestGuitar.price) {
          cheapestGuitar = guitars.models[i];
        }
      }
    }
    return cheapestGuitar;
  },

  getGuitarListPrice(guitars) {
    let guitarListPrice = 0;
    for (let i = 0; i < guitars.models.length; i++) {
      let model = guitars.models[i];
      guitarListPrice = guitarListPrice + model.price;
    }
    return guitarListPrice;
  }
};

module.exports = guitarListAnalytics;