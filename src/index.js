const core = require("@actions/core");
const { report } = require('./httpClient');
const { GithubActions } = require('./githubActions');

const url = core.getInput('url')
const numbers = core.getInput('numbers')

report({ url, numbers: new GithubActions() })
