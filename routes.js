const express = require('express');
const path = require('path');
const router = express.Router();

// Route for the coming soon page
router.use('/', express.static(path.join(__dirname, 'public', 'products')));

// Route for the service catalogue page
router.use('/coming%soon', express.static(path.join(__dirname, 'public', 'coming_soon')));

// Route for the service catalogue page
router.use('/our%services', express.static(path.join(__dirname, 'public', 'service_catalogue')));


module.exports = router;