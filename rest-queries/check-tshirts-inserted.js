// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'tshirt',
  method: 'get',
  test() {
    // check that we got the right number of tshirts
    assert.equal(response.length, store.mockTshirt.length);
    // check that all tshirts were
    // inserted correctly with correct data
    assert.deepEqual(response, store.mockTshirt, "Fail pga id?");
  }
});