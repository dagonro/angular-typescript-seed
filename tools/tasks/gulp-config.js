// -----------------------------------------------
// Configuration file for gulp tasks
'use strict';

var tasksConfig = (function ()
{
    var _sourceFolder = "src/";
    var _sourceContentFolder = _sourceFolder + "content/";
    var _outputFolder = "wwwroot/";
    var _outputContentFolder = _outputFolder + "content/";

    return {

        // source resources
        sourceFolder: _sourceFolder,
        sourceContentFolder: _sourceContentFolder,

        sourceHtmlFiles: _sourceFolder + "**/*.html",
        sourceCssFiles: _sourceContentFolder + "css/**/*.css",
        sourceMocksFiles: _sourceContentFolder + "mocks/*.json",

        sourceScriptFiles: _sourceFolder + "app/**/*.ts",
        sourceTestsScriptFiles: _sourceFolder + "tests/**/*.ts",

        // output resources
        outputFolder: _outputFolder,
        outputContentFolder: _outputContentFolder,

        outputAppFolder: _outputFolder + "app/",
        outputLibFolder: _outputFolder + "lib/",
        outputCssFolder: _outputContentFolder + "css/",
        outputFontsFolder: _outputContentFolder + "fonts/",
        outputMocksFolder: _outputContentFolder + "mocks/",

        outputTestsFolder: _outputFolder + "tests/",

    };

})();

module.exports = tasksConfig;
