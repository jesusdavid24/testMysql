const express = require('express');
const router = express.Router();

// CONTROLLER//
const transactionsController = require('../controllers/transactions.controller');

//ROUTES//
router.get('/getTable', transactionsController.plateEntry);


module.exports = router;