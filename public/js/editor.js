require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.29.0/min/vs' } });

let inputEditor
let outputEditor

const inputEditorOptions = {
    value: editorComment ? editorComment : '',
    language: inputLanguage,
    readOnly: false,
    theme: "myTheme",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Droid sans mono",
    wordWrap: "bounded",
    wordWrapColumn: 67,
    minimap: { enabled: false }
}

const outputEditorOptions = {
    value: '',
    language: outputLanguage,
    readOnly: true,
    theme: "myTheme",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Droid sans mono",
    wordWrap: "bounded",
    wordWrapColumn: 67,
    minimap: { enabled: false }
}

const theme = {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
        "editor.background": "#1C2130"
    },
}

const editorContainer = document.getElementById('input-editor');
const outputContainer = document.getElementById('output-editor');

require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme("myTheme", theme);
    inputEditor = monaco.editor.create(editorContainer, inputEditorOptions);
    outputEditor = monaco.editor.create(outputContainer, outputEditorOptions);
});
