var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var BitModel = require('./model');
var moment = require('moment')


module.exports = Backbone.View.extend({
  el: '.post',
  template: _.template(tmpl.newBitterForm),
  initialize: function () {
    if(!this.model) {
      this.model = new BitModel({})
    }
    // this.listenTo(this.model, 'change', this.addAll)
    // this.listenTo(this.model, 'update', this.addAll)
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
    console.log("SUBMIT CLICKED", event);
    var id = Math.floor(Math.random()*10000);
    var today = moment().format("DD MMM YYYY");
    var saveThing = {
      avatar: "wendell.jpg",
      name: "Wendell",
      username: "@WendellTheCat ",
      date: today,
      post: this.$el.find('textarea[name="post"]').val(),
      id: id
    }
    this.$el.find('textarea').val('');
    this.collection.create(saveThing);
    console.log(this.collection, "COLLECTION");
    // this.model = new BitModel({})
  }
})
