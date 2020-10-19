import _ from 'underscore';
import { CollectionView } from 'backbone.marionette';
import ItemCollection from '../models/ItemCollection';
import ItemView from './ItemView';

export default CollectionView.extend({
  collection: new ItemCollection(),
  childViewContainer: '#list-items',
  childView: ItemView,
  template: _.template('<ul class="list-group list-group-flush" id="list-items"></ul>'),
});
