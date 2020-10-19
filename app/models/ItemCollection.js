import Backbone from 'backbone';
import Item from './Item'
import Channel from '../components/Channel';

export default Backbone.Collection.extend({
  model: Item,
  initialize() {
    this.listenTo(Channel, 'item:add', this.addItem);
    this.listenTo(Channel, 'item:remove', this.removeItem);
    this.listenTo(Channel, 'item:save', this.saveItem);
  },
  addItem(title) {
    this.add({title});
  },
  removeItem(item) {
    item.destroy();
  },
  saveItem(item) {
// console.log(item)
  },
});
