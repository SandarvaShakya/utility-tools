const {
    jsonToStringTitle, 
    stringToJsonTitle, 
    yamlToJsonTitle, 
    jsonToYamlTitle, 
    yamlValidatorTitle, 
    jsonValidatorTitle, 
    jsonFormatterTitle, 
    yamlFormatterTitle
} = require('../constants/constants')

const getPageData = (url) => {
    let pageTitle
    let action
    let editorComment
    let inputLanguage
    let outputLanguage
    let path = url
    switch(url) {
        case "/json-string":
            pageTitle = jsonToStringTitle
            action = 'Convert'
            editorComment = "# JSON to String Converter"
            inputLanguage = "json"
            outputLanguage = "plaintext"
            break
        case "/string-json":
            pageTitle = stringToJsonTitle
            action = 'Convert'
            editorComment = "# String to JSON Converter"
            inputLanguage = "plaintext"
            outputLanguage = "json"
            break
        case "/yaml-json":
            pageTitle = yamlToJsonTitle
            action = 'Convert'
            editorComment = "# YAML to JSON Converter"
            inputLanguage = "yaml"
            outputLanguage = "json"
            break
        case "/json-yaml":
            pageTitle = jsonToYamlTitle
            action = 'Convert'
            editorComment = "# JSON to YAML Converter"
            inputLanguage = "json"
            outputLanguage = "yaml"
            break
        case "/yaml-validator":
            pageTitle = yamlValidatorTitle
            action = 'Validate'
            editorComment = "# Validate your YAML code"
            inputLanguage = outputLanguage = "yaml"
            break
        case "/json-validator":
            pageTitle = jsonValidatorTitle
            action = 'Validate'
            editorComment = "# Validate your JSON code"
            inputLanguage = outputLanguage = "json"
            break
        case "/json-formatter":
            pageTitle = jsonFormatterTitle
            action = 'Format'
            editorComment = "# Format your JSON code"
            inputLanguage = outputLanguage = "json"
            break
        case "/yaml-formatter":
            pageTitle = yamlFormatterTitle
            action = 'Format'
            editorComment = "# Format your YAML code"
            inputLanguage = outputLanguage = "yaml"
            break
        default:
            pageTitle = ''
            action = ''
            editorComment = ''
    }
    return {pageTitle, action, editorComment, path, inputLanguage, outputLanguage}
}

module.exports = {
    getPageData
}