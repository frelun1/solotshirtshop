// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'tshirt',
  method: 'get',
  test() {
   // Check that there are no tshirts in DB
   assert.deepEqual(response, []);
  }
});