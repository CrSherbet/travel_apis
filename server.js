const express = require('express')
const bodyParser = require('body-parser')

const attractions = require('./routes/api/attractions')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/attractions', attractions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

