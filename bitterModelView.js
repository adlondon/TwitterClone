var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  template: _.template(tmpl.bitterPost),
  initialize: function () {
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .delete': 'twitDelete',
  },
  twitDelete: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
})
