const core = require("@actions/core");
const {report} = require('./httpClient');

const url = core.getInput('url')
const numbers = core.getInput('numbers')

report({url, numbers})
