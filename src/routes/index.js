import express from 'express'
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

const router = express.Router()

const UnSplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': 'Client-ID '+ process.env.ACCESS_TOKEN
  }
});

/**
 * Get a random photo
 */
router.get('/random', (request, response) => {
  try {
    UnSplash.get(
        '/photos/random'
      )
      .then((res) => {
          response.send(res.data)
        },
        (error) => {
          response.send(error)
        }
      );
  } catch (error) {
    console.log('caught error ' + error)
    response.send(error);
  }
});

/**
 * Retrieve a single photo by it's id
 */
router.get('/:id', (request, response) => {
  // ...
});

/**
 * Get a single photo's statistics by id
 */
router.get('/:id/statistics', (request, response) => {
  // ...
});

/**
 * Get a single page of photo results for a query.
 */
router.get('/search', (request, response) => {
  // ...
});

router.get('*', (request, response) => {
  response.send('invalid path')
})

module.exports = router;