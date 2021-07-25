const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT

app.listen(port, () => console.log('listening at 30q0'));



app.use(express.static('public'));
app.post('/api', (request, response) => {

    console.log(request);
})