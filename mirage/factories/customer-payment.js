import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  date() {
    return faker.date.past(10);
  },

  quantity() {
    return faker.random.number({ min: 1, max: 10 });
  },

  total() {
    return faker.random.number({ min: 5, max: 100 });
  },

  tip() {
    return faker.random.number({ min: 0, max: 5 });
  },

  type() {
    return faker.list.random('cash', 'tab', 'visa')();
  }
});
