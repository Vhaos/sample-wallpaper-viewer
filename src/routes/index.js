import express from 'express';
const router = express.Router();

/**
 * Get a random photo
 */
router.get('/random', (request, response) => {
  
})

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

module.exports = router;