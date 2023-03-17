const express = require('express');

const log = console.log;
const app = express();
const path = require('path');

const PORT = 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})


app.listen(PORT, () => log('Server is starting on PORT, ', 5000));