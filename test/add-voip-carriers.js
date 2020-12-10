const test = require('tape').test ;
const exec = require('child_process').exec ;
const pwd = process.env.TRAVIS ? '' : '-p$MYSQL_ROOT_PASSWORD';

test('populating more test case data', (t) => {
  exec(`mysql -h localhost -u root ${pwd} -D jambones_test < ${__dirname}/db/populate-test-data2.sql`, (err, stdout, stderr) => {
    if (err) return t.end(err);
    t.timeoutAfter(60000);

    setTimeout(() => {
      t.pass('test data set augmented with carriers');
      t.end();
    }, 50000)
  });
});
