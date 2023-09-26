const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

const home = require('./routes/home')
const components = require('./routes/components');
const { notFound } = require('./controllers/homeController');

app.use('/', home)
app.use('/components', components)
app.use(notFound)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})