var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var BitterModelView = require('./bitterModelView')

module.exports = Backbone.View.extend({
  el: '.feed',
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
    // this.listenTo(this.collection, 'change', this.addAll)
    // this.listenTo(this.collection, 'add', this.addAll)
    // this.collection.on('add', this.addAll, this);
  },

  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this)
  },

  addOne: function (el) {
    var bitterModelView = new BitterModelView({model: el})
    this.$el.prepend(bitterModelView.render().el);
  }
})
