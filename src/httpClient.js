const axios = require("axios");
const context = require('@actions/github');
let commits;

function myFunction(commit) {
    commits += `${commit.id.substring(0, 8)} - ${commit.message}\n`;
}

function report({url, numbers}) {
    let github = context.context.payload;
    const commitHead = github.head_commit.id.substring(0,8);
    github.commits.forEach(myFunction);
    const bodyData = `Triggered via push by *${github.head_commit.committer.username}* action ${github.repository.default_branch} ${commitHead}
*GitHub Actions**Workflow Deploy to Staging job deployment triggered by push is SUCCESS* for _release/production_
${github.head_commit.url}
${commitHead} - ${github.commits.length} commits
Commits
${commits}
Job Steps
✅ ${github.head_commit.id}
✅ extract_branch
✅ deploy_staging

*Workflow*
_Deploy to Staging_

*Git Ref*
_${github.repository.default_branch} (branch)_

*Run ID*
_${context.context.runId}_

*Run Number*
_${context.context.runNumber}_

*Actor*
_${github.head_commit.committer.username}_

*Job Status*
_SUCCESS_`;


    const  numbersSend  = numbers.split(',');
    for (let i = 0; i < numbersSend.length; i++) {
        const data = JSON.stringify({
            "chatId": `${numbersSend[i]}`,
            "body": bodyData
        });
        const config = {
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = {
    report
}
