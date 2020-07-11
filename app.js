const express = require('express');
const consign = require('consign')({ verbose: false });
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

consign.include('./src/api/routes').into(app);

app.listen(process.env.PORT || 4000, () => {
    console.log(
        `${new Date()} - Server online on port ${process.env.PORT || 4000}`,
    );
});

module.exports = app;