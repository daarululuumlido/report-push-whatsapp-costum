const axios = require("axios");

function report({url, numbers, dataGithub, actions}) {
    console.log(url)
    console.log(numbers)
    console.log(dataGithub)
    console.log(actions)
    const data = JSON.stringify({
        "chatId":numbers,
        "body": `Triggered via push by *andryluthfi* action release/production 5644a10b
*GitHub Actions**Workflow Deploy to Staging job deployment triggered by push is SUCCESS* for _release/production_
https://github.com/fjogeleit/http-request-action
5644a10b - 1 commits
Commits
5644a10b - temp
Job Steps
✅ bc49a7674c9c4914b05d01831d601745
✅ extract_branch
✅ deploy_staging

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
_SUCCESS_`
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
module.exports = {
    report
}
