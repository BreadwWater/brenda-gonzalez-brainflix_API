// Importing required modules and packages
const express = require(`express`);
const app = express();
const cors = require(`cors`);
const path = require(`path`);
const Port = 8080;

// Import the videos route handler
const Routevideos = require(`./routes/Videos`);

// Mount the videos route at /videos
app.use(`/videos`, Routevideos);

// Serve static files in the /public directory at /public
app.use(`/public`, express.static(path.join(__dirname, `public`)));

// Enable Cross-Origin Resource Sharing (CORS) for the server
app.use(cors({
    origin: true,
    methods: [`GET`, `POST`, `DELETE`],
    allowedHeaders: [`Content-Type`, `Authorization`]
}));

// Enable parsing of JSON
app.use(express.json());

// Middleware to pass control to the next handler function
app.use((req, res, next) => {
    next();
});

// Start the server and log a message to the console
app.listen(Port, () => {
    console.log(`✅ Server is Running on ${Port} ✅`);
});
