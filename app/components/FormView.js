import Marionette from 'backbone.marionette';
import TemplateCache from '../templates/form.jst';
import Channel from './Channel';

export default Marionette.View.extend({
  template: TemplateCache,
  ui: {
    title: '#title',
    button: '#add-button'
  },
  events: {
    'click @ui.button': 'onAddClick',
    'keypress @ui.title': 'onInputKeypress',
    'keyup @ui.title': 'onInputKeyup',
  },
  collectionEvents: {
    all: 'render'
  },
  onInputKeyup(e) {
    const ESC_KEY = 27;
    if (e.which === ESC_KEY) {
      this.render();
    }
  },

  onInputKeypress(e) {
    const ENTER_KEY = 13;
    const title = this.ui.title.val().trim();

    if (e.which === ENTER_KEY && title) {
      this.add(title);
    }
  },

  onAddClick(e) {
    const title = this.ui.title.val().trim();

    if (title) {
      this.add(title);
    }
  },
  add(title) {
    Channel.trigger('item:add', title);
    this.ui.title.val('');
  }
});
