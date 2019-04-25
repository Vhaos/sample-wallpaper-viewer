import express from 'express'
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

const router = express.Router()

const UnSplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': 'Client-ID ' + process.env.ACCESS_TOKEN
  }
});

/**
 * Get a random photo
 */
router.get('/random', (request, response) => {
  console.log(request.params.Id)
  try {
    UnSplash.get('/photos/random')
      .then((res) => {
        response.send(res.data)
      }, (error) => {
        response.send(error.data)
      });
  } catch (error) {
    console.log('caught error ' + error)
    response.send(error);
  }
});

/**
 * Retrieve a single photo by it's Id
 */
router.get('/photo/:Id', (request, response) => {
  try {
    let url = '/photos/'+ request.params.Id;
    UnSplash.get(url)
      .then((res) => {
        response.send(res.data)
      }, (error) => {
        console.log('caught axios error' + error)
      })
  } catch (error) {
    console.log('caught error ' + error)
    response.send(error)
  }
});

/**
 * Get a single photo's statistics by id
 */
router.get('/:id/statistics', (request, response) => {
  try {
    UnSplash.get('/photos/'+request.params.id+'/statistics')
      .then((res) => {
        response.send(res.data)
      }, (error) => {
        response.send(error)
      })
  } catch (error) {
    console.log('caught error ' + error)
    response.send(error)
  }
});

/**
 * Get a single page of photo results for a query.
 */
router.get('/search', (request, response) => {
 //...
});

router.get('*', (request, response) => {
  response.status(404).send("sorry, can't find that")
})

module.exports = router;