// userRoutes.js
const express = require('express');
const router = express.Router();

// Define routes for users
router.get('/', (req, res) => {
  res.send('List of users');
});

router.get('/:id', (req, res) => {
  res.send(`User with ID: ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;