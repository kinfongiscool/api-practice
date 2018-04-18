const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect('mongodb://kintest:kintest@ds247569.mlab.com:47569/api-practice', (err, database) => {
  if (err) return console.log(err)

  db = database.db("api-practice")
  require('./app/routes')(app, db);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
