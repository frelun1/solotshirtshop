// Note: Using should test syntax
module.exports = ({ response, store, repeat, i }) => ({
  path: 'ordered_tshirt',
  method: 'post',
  body: store.mockOrdered_tshirt[i],
  test() {
    // check that a row was inserted in the db
    response.affectedRows.should.equal(1);
    // store the inserted id in mockUsers
    store.mockOrdered_tshirt[i].id = response.insertId;
    // repeat this step/query as long as
    // there a more mockUsers to insert
    if(store.mockOrdered_tshirt[i + 1]){
      repeat();
    }
  }
});