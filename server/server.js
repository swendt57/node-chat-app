const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();

let {authenticate} = require('./middleware/authenticate');

app.use(express.static(publicPath));



app.listen(port, () => {
    console.log(`app started on port ${port}`);
});

module.exports = {app};

// console.log(__dirname + '/../public'); //old way
// console.log(publicPath); //new way