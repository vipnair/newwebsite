const express = require('express');
const app = express();

app.use(express.static('public'));
app.post('/api', (request, response) => {

    console.log(request);
})