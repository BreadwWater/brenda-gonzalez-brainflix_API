// Importing required modules and packages
const express = require(`express`);
const app = express();
const fs = require(`fs`);
const uuid = require(`uuid`);
const cors = require(`cors`);
const router = express.Router();

// Importing video data from external JSON file
const videoList = require(`../data/videoData.json`);

// Adding cors middleware to handle cross-origin resource sharing
router.use(cors());

// Defining a function to read the video data from the JSON file
function videoRead() {
  const videoList = fs.readFileSync(`./data/videoData.json`);
  const parsedData = JSON.parse(videoList);
  return parsedData;
}

// Handling GET requests to the root endpoint, which returns all video data
router.get(`/`, (req, res) => {
  const video = videoRead();
  res.json(video);
});

// Handling GET requests to a specific video endpoint, which returns data for a single video by ID
router.get(`/:id`, (req, res) => {
  findId = videoList.findIndex((video) => video.id === req.params.id);
  res.json(videoList[findId]);
});

// Handling POST requests to the root endpoint, which adds a new video to the video data
router.post(`/`, (req, res) => {
  console.log(req.body);
  // Creating a new video object with a unique ID generated by the uuid package and other properties from the request body
  const videoUpdate = {
    id: uuid4(),
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  }
  // Reading the current video data from the JSON file and adding the new video object to the array
  const videos = videoRead();
  videos.push(videoUpdate);

  fs.writeFileSync(`./data/videoData.json`, JSON.stringify(videos));

  res.status(201).json(videoUpdate);
})

module.exports = router;