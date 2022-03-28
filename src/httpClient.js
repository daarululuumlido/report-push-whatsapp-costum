const axios = require("axios");
const context = require('@actions/github');

//{
//   payload: {
//     after: '54350c0be3ddbad601d180bc536e90bb533011da',
//     base_ref: null,
//     before: 'db5902ffeccce4108ae030df18d1df52c6dd2a26',
//     commits: [ [Object] ],
//     compare: 'https://github.com/hasanbasri1993/test-request-hook/compare/db5902ffeccc...54350c0be3dd',
//     created: false,
//     deleted: false,
//     forced: true,
//     head_commit: {
//       author: [Object],
//       committer: [Object],
//       distinct: true,
//       id: '54350c0be3ddbad601d180bc536e90bb533011da',
//       message: 'add version',
//       timestamp: '2022-03-28T14:13:20+07:00',
//       tree_id: 'c35fc5bc11169317f3d0e728ef9c4788e28f1a88',
//       url: 'https://github.com/hasanbasri1993/test-request-hook/commit/54350c0be3ddbad601d180bc536e90bb533011da'
//     },
//     pusher: { email: 'hasanbasri1493@gmail.com', name: 'hasanbasri1993' },
//     ref: 'refs/heads/main',
//     repository: {
//       allow_forking: true,
//       archive_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/{archive_format}{/ref}',
//       archived: false,
//       assignees_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/assignees{/user}',
//       blobs_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/git/blobs{/sha}',
//       branches_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/branches{/branch}',
//       clone_url: 'https://github.com/hasanbasri1993/test-request-hook.git',
//       collaborators_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/collaborators{/collaborator}',
//       comments_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/comments{/number}',
//       commits_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/commits{/sha}',
//       compare_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/compare/{base}...{head}',
//       contents_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/contents/{+path}',
//       contributors_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/contributors',
//       created_at: 1648403375,
//       default_branch: 'main',
//       deployments_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/deployments',
//       description: null,
//       disabled: false,
//       downloads_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/downloads',
//       events_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/events',
//       fork: false,
//       forks: 0,
//       forks_count: 0,
//       trees_url: 'https://api.github.com/repos/hasanbasri1993/test-request-hook/git/trees{/sha}',
//       updated_at: '2022-03-27T19:10:52Z',
//       url: 'https://github.com/hasanbasri1993/test-request-hook',
//       visibility: 'private',
//       watchers: 0,
//       watchers_count: 0
//     },
//     sender: {
//       avatar_url: 'https://avatars.githubusercontent.com/u/6375150?v=4',
//       events_url: 'https://api.github.com/users/hasanbasri1993/events{/privacy}',
//       followers_url: 'https://api.github.com/users/hasanbasri1993/followers',
//       following_url: 'https://api.github.com/users/hasanbasri1993/following{/other_user}',
//       gists_url: 'https://api.github.com/users/hasanbasri1993/gists{/gist_id}',
//       gravatar_id: '',
//       html_url: 'https://github.com/hasanbasri1993',
//       id: 6375150,
//       login: 'hasanbasri1993',
//       node_id: 'MDQ6VXNlcjYzNzUxNTA=',
//       organizations_url: 'https://api.github.com/users/hasanbasri1993/orgs',
//       received_events_url: 'https://api.github.com/users/hasanbasri1993/received_events',
//       repos_url: 'https://api.github.com/users/hasanbasri1993/repos',
//       site_admin: false,
//       starred_url: 'https://api.github.com/users/hasanbasri1993/starred{/owner}{/repo}',
//       subscriptions_url: 'https://api.github.com/users/hasanbasri1993/subscriptions',
//       type: 'User',
//       url: 'https://api.github.com/users/hasanbasri1993'
//     }
//   },
//   eventName: 'push',
//   sha: '54350c0be3ddbad601d180bc536e90bb533011da',
//   ref: 'refs/heads/main',
//   workflow: 'CI',
//   action: '__daarululuumlido_report-push-whatsapp-costum',
//   actor: 'hasanbasri1993',
//   job: 'build',
//   runNumber: 41,
//   runId: 2050732233,
//   apiUrl: 'https://api.github.com',
//   serverUrl: 'https://github.com',
//   graphqlUrl: 'https://api.github.com/graphql'
// }
function report({url, numbers}) {
    let github = context.context.payload;
    console.log(JSON.stringify(github, null, 2));
    const bodyData = `Triggered via push by *${github.actor}* action ${github.repository.default_branch} 5644a10b
*GitHub Actions**Workflow Deploy to Staging job deployment triggered by push is SUCCESS* for _release/production_
${github.head_commit.url}
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
_${github.repository.default_branch} (branch)_

*Run ID*
_${github.runId}_

*Run Number*
_${github.runNumber}_

*Actor*
_${github.actor}_

*Job Status*
_SUCCESS_`;

    console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        const data = JSON.stringify({
            "chatId": `${numbers[i]}`,
            "body": bodyData
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
