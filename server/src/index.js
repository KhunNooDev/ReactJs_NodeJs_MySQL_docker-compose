const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const sample = require('./routes/sample.route');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'connected server' });
});

//router -> controller -> service -> database
app.use('/sample', sample);

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});
