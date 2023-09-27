const express = require('express');
const router = express.Router()

const {
    getHome,
    getJsonToString,
    getStringToJson,
    getYamlFormatter,
    getJsonFormatter,
    getJsonValidator,
    getYamlValidator,
    getYamlToJson,
    getJsonToYaml,
    convertJsonToString,
    convertStringToJson,
    convertYamlToJson,
    convertJsonToYaml,
    formatJson,
    formatYaml
} = require('../controllers/homeController');

router.get('/', getHome)
router.get('/json-string', getJsonToString)
router.post('/json-string', convertJsonToString)

router.get('/string-json', getStringToJson)
router.post('/string-json', convertStringToJson)

router.get('/yaml-json', getYamlToJson)
router.post('/yaml-json', convertYamlToJson)

router.get('/json-yaml', getJsonToYaml)
router.post('/json-yaml', convertJsonToYaml)

router.get('/json-validator', getJsonValidator)
router.get('/yaml-validator', getYamlValidator)

router.get('/yaml-formatter', getYamlFormatter)
router.post('/yaml-formatter', formatYaml)

router.get('/json-formatter', getJsonFormatter)
router.post('/json-formatter', formatJson)

module.exports = router;