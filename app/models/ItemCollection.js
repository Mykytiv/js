import Backbone from 'backbone';
import Item from './Item'
import Channel from '../components/Channel';

export default Backbone.Collection.extend({
  model: Item,
  comparator: 'created',
  initialize() {
    this.listenTo(Channel, 'item:add', this.addItem);
    this.listenTo(Channel, 'item:remove', this.removeItem);
  },
  addItem(title) {
    this.add({title});
  },
  removeItem(item) {
    item.destroy();
  },
});
