const axios = require("axios");


function report(url, numbers) {
    const body = `Triggered via push by *fdg dfg * action release/production $df gdfg 
*GitHub Actions*

*Workflow Deploy to Staging job deployment triggered by push is SUCCESS* for _release/production_https://github.com/fjogeleit/http-request-action

fdg sdfg dsfg- 1 commits
Commits
ds fsdf sdf sd - temp

Job Steps\n✅ bc49a7674c9c4914b05d01831d601745\n✅ extract_branch\n✅ deploy_staging

*Workflow*

_Deploy to Staging_

*Git Ref*
_release/production (branch)_

*Run ID*
_2048373428_

*Run Number*
_98_

*Actor*
_andryluthfi_

*Job Status*
_SUCCESS_
`;
    const data = JSON.stringify({
        "chatId": numbers,
        "body": body
    });

    const config = {
        method: 'post',
        url: 'https://dulido-bot.herokuapp.com/api/1000/sendMessage',
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


module.exports = {
    report
}
