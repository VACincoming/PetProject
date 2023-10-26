require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const router = require('./router')
const errorMiddleware = require('./middlewares/ErrorMiddleware');

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(fileUpload({}));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use('/api', router);
app.use(errorMiddleware);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log('Server started ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp();

