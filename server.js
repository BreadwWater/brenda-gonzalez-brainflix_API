// initialize Express Server in project
const express = require('express');
const app = express();

// when the server receives a GET request to '/'
app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});

app.get('/example', (req, res) => {
    res.send('Hello World');
})

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

// You can now start your server by running: 'node server.js' in your terminal window.

// initialize a node package.json file for your app
// npm init

// install express and save it to your package.json file
// npm install express --save