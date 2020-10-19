import TemplateCache from '../templates/item.jst';
import { View } from 'backbone.marionette';
import Channel from './Channel';

export default View.extend({
  template: TemplateCache,
  ui: {
    destroy: '.destroy',
    edit: '.edit'
  },
  events: {
    'click @ui.destroy': 'onDestroy',
    'click @ui.edit': 'onEdit',
  },
  modelEvents: {
    'change:title': 'render'
  },
  onDestroy() {
    Channel.trigger('item:remove', this.model);
    return null;
  },
  onEdit() {
    Channel.trigger('item:edit', this.model);
    return null;
  }
});
