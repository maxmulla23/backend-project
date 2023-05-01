const router = require('express').Router()
const { getAllProperties } = require('../controllers/property.controller')

router.get('/', getAllProperties)

module.exports = router;
