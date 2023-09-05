const syncDB = require('../../tasks/sync-db');

 describe('Test in syncDB', () => {
  test('may be execute 2 times the process', ()=>{
    syncDB();
    const times = syncDB(); 
    expect(times).toBe(2);
   })
 })
