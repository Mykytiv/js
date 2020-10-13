import Marionette from 'backbone.marionette';
import TemplateCache from '../templates/layout.jst';
import FormView from  './FormView';
import ItemCollectionView from './ItemCollectionView';

const View  = Marionette.View;

export default View.extend({
  template: TemplateCache,
  regions: {
    form: '#form',
    list: '#list'
  },
  onRender() {
    this.showChildView('form', new FormView());
    this.showChildView('list', new ItemCollectionView());
  }
});
