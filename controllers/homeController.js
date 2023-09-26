const {
    jsonValidatorTitle,
    jsonToStringTitle,
    jsonToYamlTitle,
    yamlToJsonTitle,
    yamlFormatterTitle,
    stringToJsonTitle,
    jsonFormatterTitle,
    yamlValidatorTitle,
} = require('../constants/constants')

let getHome = (request, response) => {
    response.redirect(301, '/json-string')
}

// JSON TO STRING
let getJsonToString = (request, response) => {
    let pageTitle = jsonToStringTitle
    let action = 'Convert'
    response.render('index', { pageTitle, action });
}

let convertJsonToString = (request, response) => {
    const code = request.body
    const stringCode = JSON.stringify(code.code);
    let outputString = stringCode.replace(/\\r\\n+/g, '').replace(/\s+/g, '');
    response.render('newEditor', { outputString })
}

// STRING TO JSON
let getStringToJson = (request, response) => {
    let pageTitle = stringToJsonTitle
    response.render('pages/stringToJson', { pageTitle })
}

// YAML TO JSON
let getYamlToJson = (request, response) => {
    let pageTitle = yamlToJsonTitle
    response.render('pages/stringToJson', { pageTitle })
}

// JSON TO YAML
let getJsonToYaml = (request, response) => {
    let pageTitle = jsonToYamlTitle
    response.render('pages/stringToJson', { pageTitle })
}

// JSON FORMATTER
let getJsonFormatter = (request, response) => {
    let pageTitle = jsonFormatterTitle
    response.render('pages/stringToJson', { pageTitle })
}

// YAML FORMATTER
let getYamlFormatter = (request, response) => {
    let pageTitle = yamlFormatterTitle
    response.render('pages/stringToJson', { pageTitle })
}

// JSON VALIDATOR
let getJsonValidator = (request, response) => {
    let pageTitle = jsonValidatorTitle
    response.render('pages/stringToJson', { pageTitle })
}

// YAML VALIDATOR
let getYamlValidator = (request, response) => {
    let pageTitle = yamlValidatorTitle
    response.render('pages/stringToJson', { pageTitle })
}

let notFound = (request, response) => {
    response.redirect('/')
}

module.exports = {
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
    notFound
}