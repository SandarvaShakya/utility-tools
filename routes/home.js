const express = require('express');
const router = express.Router()

const {
    getHome,
    getTool,
    convertJsonToString,
    convertStringToJson,
    convertYamlToJson,
    convertJsonToYaml,
    formatJson,
    formatYaml
} = require('../controllers/homeController');

router.get('/', getHome)
router.get('/:page', getTool)

router.post('/json-string', convertJsonToString)
router.post('/string-json', convertStringToJson)
router.post('/yaml-json', convertYamlToJson)
router.post('/json-yaml', convertJsonToYaml)

// router.get('/json-validator', getJsonValidator)
// router.get('/yaml-validator', getYamlValidator)
router.post('/yaml-formatter', formatYaml)
router.post('/json-formatter', formatJson)

module.exports = router;