const express = require('express');
const app = express();
console.log("started")

app.use(express.static('public'));
app.post('/api', (request, response) => {

    console.log(request);
})