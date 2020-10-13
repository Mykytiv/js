import Marionette from 'backbone.marionette';
import RootView from './RootView';

export default Marionette.Application.extend({
  region: '#app',
  onStart() {
    this.showView(new RootView());
  }
});
