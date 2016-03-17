var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/tweeter2/',
  idAttribute: '_id',
  initialize: function () {
    console.log("TWIT MODEL FIRED");
  }
})
