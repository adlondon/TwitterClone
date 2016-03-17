var Backbone = require('backbone');
var _ = require('underscore');
var twitModel = require('./model')

module.exports = Backbone.Collection.extend({
  model: twitModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/tweeter2/',
  initialize: function () {
    console.log("FEED COLLECTION FIRED");
  }
});
