const express = require('express');
const bodyParser = require('body-parser');
const app = express();



// panggil routes
var routes = require('./routes');
routes(app);


// parse aplication json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(8000, () => {
    console.log(`Server started on port`);
});