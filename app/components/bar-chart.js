import Component from '@ember/component';
import crossfilter from 'crossfilter';
import d3 from 'd3';
import dc from 'dc';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    const data = this.get('data');
    const facts = crossfilter(data);
    const typeDimension = facts.dimension(d => d.type);
    const typeGroup = typeDimension.group();
    let chart = dc.barChart(`#${this.elementId}`);
    chart
      .dimension(typeDimension)
      .group(typeGroup)
      .x(d3.scaleOrdinal().domain(['tab', 'cash', 'visa']))
      .xUnits(dc.units.ordinal);

    dc.renderAll();
  }
});
