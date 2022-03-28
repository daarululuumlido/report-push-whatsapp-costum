const core = require("@actions/core");
const { report } = require('./httpClient');
const { GithubActions } = require('./githubActions');

const url = core.getInput('url')
const numbers = core.getInput('numbers')
const data = core.getInput('data')

report({ url, numbers, data: new GithubActions() })
