const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const controller = require('./controllers/user.controller');

app.use(
  cors({
    origin: [process.env.ORIGIN],
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', cors(), controller.getAll);
app.get('/user/:id', cors(), controller.getOne);
app.post('/user', cors(), controller.create);
app.put('/user', cors(), controller.update);
app.delete('/user/:id', cors(), controller.delete);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
