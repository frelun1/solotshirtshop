// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'ordered_tshirt',
  method: 'get',
  test() {
   // Check that there are no tshirts in DB
   assert.deepEqual(response, []);
  },
  setup() {
    // Store the mocktshirts in the db (setup for next step/query)
    store.mockOrdered_tshirt = require('./mock-ordered_tshirt.json');
  }
});