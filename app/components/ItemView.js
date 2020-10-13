import TemplateCache from '../templates/item.jst';
import { View } from 'backbone.marionette';
import Channel from './Channel';

export default View.extend({
  template: TemplateCache,
  ui: {
    destroy: '.destroy'
  },
  events: {
    'click @ui.destroy': 'onDestroy',
  },
  onDestroy() {
    Channel.trigger('item:remove', this.model);
    return null;
  }
});
