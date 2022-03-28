const axios = require("axios");
const context = require('@actions/github');
const {forEach} = require("../dist");

function report({url, numbers}) {
    let github = context.context.payload;
    console.log(JSON.stringify(github));
    const commitHead = github.head_commid.id.substring(0,8);
    let commits = "";
    forEach(github.commits, (commit) => {
        commits += `${commit.id.substring(0,8)} - ${commit.message}\n`;
    });

    const bodyData = `Triggered via push by *${github.actor}* action ${github.repository.default_branch} ${commitHead}
*GitHub Actions**Workflow Deploy to Staging job deployment triggered by push is SUCCESS* for _release/production_
${github.head_commit.url}
${commitHead} - ${github.commits.length} commits
Commits
${commitHead} - temp
Job Steps
✅ ${github.head_commid.id}
✅ extract_branch
✅ deploy_staging

*Workflow*
_Deploy to Staging_

*Git Ref*
_${github.repository.default_branch} (branch)_

*Run ID*
_${github.runId}_

*Run Number*
_${github.runNumber}_

*Actor*
_${github.actor}_

*Job Status*
_SUCCESS_`;


    const  numbersSend  = numbers.split(',');
    for (let i = 0; i < numbersSend.length; i++) {
        const data = JSON.stringify({
            "chatId": `${numbersSend[i]}`,
            "body": "asdasd"
        });
        const config = {
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'connect.sid=s%3ARPpaOmzVCl4j8kY9dGRutM-o4-_aRShw.%2FhyCSqB3aC9vr3o3e3%2FlYrPCO5LA9qp0ISLXCRZDea0'
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
