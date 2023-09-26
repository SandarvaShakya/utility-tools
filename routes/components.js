const express = require('express');
const router = express.Router()

const { getDropdown, getMenu } = require('../controllers/componentsController');

router.get('/dropdown', getDropdown)
router.get('/menu', getMenu)

module.exports = router;