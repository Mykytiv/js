import Marionette from 'backbone.marionette';
import TemplateCache from '../templates/editForm.jst';
import Channel from './Channel';

export default Marionette.View.extend({
  template: TemplateCache,
  ui: {
    title: '#edit-title',
    edit: '#edit-button',
    cancel: '#cancel-button'
  },

  events: {
    'click @ui.edit': 'onEditClick',
    'click @ui.cancel': 'onCancelClick',
  },

  onEditClick(e) {
    const title = this.ui.title.val().trim();
    if (title) {
      this.model.update(title);
    }
    this.onComplete();
  },

  onCancelClick() {
    this.onComplete();
  },

  onComplete(){
    this.ui.title.val('');
    Channel.trigger('item:save', this.model);
  }
});
