var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');
var FormView = require('./bitterFormView');

module.exports = Backbone.Router.extend({
  subview: null,
  routes: {
    '': 'home',
    'home': 'home'
  },
  home: function () {
    var that = this; //constructor context
    var bitterCol = new BitterCollection();


    bitterCol.fetch().then(function (data) {
    var bitFormView = new FormView({collection: bitterCol});
      that.renderSubview(new BitterCollectionView({collection: bitterCol}));
    });
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
})
