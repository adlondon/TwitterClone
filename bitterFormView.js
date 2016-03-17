var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var BitModel = require('./model')


module.exports = Backbone.View.extend({
  el: '.post',
  template: _.template(tmpl.newBitterForm),
  initialize: function () {
    if(!this.model) {
      this.model = new BitModel({})
    }
    this.listenTo(this.model, 'change', this.addAll)
    this.listenTo(this.model, 'update', this.addAll)
    this.render();
  },
  render: function () {
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .submitTwit': 'twitPost'
  },
  twitPost: function (event) {
    event.preventDefault();
    console.log("SUBMIT CLICKED`");
    this.model.set({
      username: this.$el.find('input[name="username"]').val(),
      post: this.$el.find('textarea[name="post"]').val()
    });
    this.$el.find('textarea').val('');
    console.log(this.collection, "THIS COLLECTION");
    this.model.save();
    this.collection.add(this.model)
    this.model = new BitModel({})

  }
})
