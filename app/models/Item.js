import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    title: '',
    created: 0
  },

  initialize: function() {
    if (this.isNew()) {
      this.set('created', Date.now());
    }
  },
});
