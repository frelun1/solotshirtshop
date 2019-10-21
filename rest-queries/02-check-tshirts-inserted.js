// Note: Using assert test syntax
module.exports = ({ assert, response, store }) => ({
  path: 'tshirt',
  method: 'get',
  test() {
    // check that we got the right number of tshirts
    assert.equal(response.length, store.mockTshirt.length);
  }
});