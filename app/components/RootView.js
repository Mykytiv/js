import Marionette from 'backbone.marionette';
import TemplateCache from '../templates/layout.jst';
import FormView from  './FormView';
import ItemCollectionView from './ItemCollectionView';
import EditFormView from './EditFormView';
import Channel from './Channel';


const View  = Marionette.View;

export default View.extend({
  template: TemplateCache,
  initialize() {
    this.listenTo(Channel, 'item:edit', this.onItemEdit);
    this.listenTo(Channel, 'item:save', this.onItemSave);
  },
  regions: {
    form: '#form',
    list: '#list',
    edit: '#edit'
  },
  onRender() {
    this.showChildView('form', new FormView());
    this.showChildView('list', new ItemCollectionView());
  },
  onItemEdit(model) {
    this.showChildView('edit', new EditFormView({model}));
  },
  onItemSave(model) {
    this.getRegion('edit').empty();
  }
});
