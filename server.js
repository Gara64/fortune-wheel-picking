const express = require('express')
const bodyParser = require('body-parser')
const elements = require('./data/elements.json');

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/elements', (req, res) => {
  res.send({ elements: elements });
});

app.delete('/element', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your DELETE request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
