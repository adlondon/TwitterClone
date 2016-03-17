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
    var bitFormView = new FormView({collection: bitterCol});

    bitterCol.fetch().then(function (data) {
      var collection = new BitterCollection(data);
      that.renderSubview(new BitterCollectionView({collection: collection}));
    });
  },
  renderSubview: function (subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }
})
