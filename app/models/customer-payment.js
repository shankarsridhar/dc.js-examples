import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  date: attr('string'),
  quantity: attr('number'),
  total: attr('number'),
  tip: attr('number'),
  type: attr('string')
});
