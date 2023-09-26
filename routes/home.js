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
    convertJsonToString
} = require('../controllers/homeController');

router.get('/', getHome)
router.get('/json-string', getJsonToString)
router.post('/json-string', convertJsonToString)

router.get('/string-json', getStringToJson)
router.get('/yaml-json', getYamlToJson)
router.get('/json-yaml', getJsonToYaml)
router.get('/json-validator', getJsonValidator)
router.get('/yaml-validator', getYamlValidator)
router.get('/yaml-formatter', getYamlFormatter)
router.get('/json-formatter', getJsonFormatter)

module.exports = router;