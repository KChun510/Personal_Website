import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.REACT_APP_PERSONAL_WEBSITE
});

const pullAllGitReposInfo = async () => {
  const res = await octokit.request('GET /users/{username}/repos'
    , {
      username: 'KChun510',
      sort: 'updated',
      direction: 'dsc',
      headers: {
        'X-Github-Api-Version': '2022-11-28'
      }
    })

  return res['data']
};

const extractRepoLang = async (repoName) => {
  try {
    let res = await octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: 'KChun510',
      repo: repoName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return Object.keys(res['data'])
  } catch (e) {
    console.log(e)
  }
}


export async function pullGitInfo() {
  let repoArr = []  /* I.e: {repo_name : [description, url, lang's]} */
  const allGitInfo = await pullAllGitReposInfo()
  for (const repoIndex in allGitInfo) {
    const repo = allGitInfo[repoIndex]
    const repoLang = await extractRepoLang(repo['name'])
    repoArr.push({ name: repo['name'], des: repo['description'], url: repo['html_url'], lang: repoLang })

  }

  return repoArr
}

export default pullGitInfo

