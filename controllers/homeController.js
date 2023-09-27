const { getPageData } = require('../helpers/script')
const YAML = require('yaml')

const getHome = (request, response) => {
    response.redirect(301, '/json-string')
}

// JSON TO STRING
const getJsonToString = (request, response) => {
    const { 
        pageTitle, 
        action,
        editorComment, 
        path, 
        inputLanguage, 
        outputLanguage 
    } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment, path, inputLanguage, outputLanguage });
}

const convertJsonToString = (request, response) => {
    const code = request.body
    const stringCode = JSON.stringify(code.code);
    const outputString = stringCode.replace(/\\r\\n+/g, '').replace(/\s+/g, '');
    response.render('newEditor', { outputString })
}

// STRING TO JSON
const getStringToJson = (request, response) => {
    const { 
        pageTitle, 
        action,
        editorComment, 
        path, 
        inputLanguage, 
        outputLanguage 
    } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment, path, inputLanguage, outputLanguage })
}

const convertStringToJson = (request, response) => {
    const { code } = request.body
    const obj = code.replace(/\\"/g, '"');
    const stringOutput = JSON.stringify(obj);
    const outputString = JSON.parse(stringOutput);
    response.render('newEditor', { outputString })
}

// YAML TO JSON
const getYamlToJson = (request, response) => {
    const { 
        pageTitle, 
        action,
        editorComment, 
        path, 
        inputLanguage, 
        outputLanguage 
    } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment, path, inputLanguage, outputLanguage })
}

const convertYamlToJson = (request, response) => {
    const { code } = request.body
    let outputString
    try{
        let obj = YAML.parse(code);
        outputString = JSON.stringify(obj, null, 2);
    } catch(error) {
        outputString = error.message
    }
    response.render('newEditor', { outputString })
}

// JSON TO YAML
const getJsonToYaml = (request, response) => {
    const { pageTitle, action, editorComment } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment })
}

// JSON FORMATTER
const getJsonFormatter = (request, response) => {
    const { pageTitle, action, editorComment } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment })
}

// YAML FORMATTER
const getYamlFormatter = (request, response) => {
    const { pageTitle, action, editorComment } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment })
}

// JSON VALIDATOR
const getJsonValidator = (request, response) => {
    const { pageTitle, action, editorComment } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment })
}

// YAML VALIDATOR
const getYamlValidator = (request, response) => {
    const { pageTitle, action, editorComment } = getPageData(request.path)
    response.render('index', { pageTitle, action, editorComment })
}

const notFound = (request, response) => {
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
    convertStringToJson,
    convertYamlToJson,
    notFound
}