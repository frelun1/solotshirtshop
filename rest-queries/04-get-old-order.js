// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'ordered_tshirt',
  method: 'get',
  test() {
    // check that we got the right number of tshirts
    assert.equal(response.length, store.mockOrdered_tshirt.length);
    // check that all tshirts were
    // inserted correctly with correct data
    assert.deepEqual(response, store.mockOrdered_tshirt, "Fail pga id?");
  }
});