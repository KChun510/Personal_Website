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
      per_page: 100,
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

async function readJSONFile() {
  const response = await fetch('/.netlify/functions/readFile', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const result = await response.json();
  return result;
}

export const writeJSONFile = async () => {
  let repoArr = []  /* I.e: {repo_name : [description, url, lang's]} */
  const allGitInfo = await pullAllGitReposInfo()

  for (const repoIndex in allGitInfo) {
    const repo = allGitInfo[repoIndex]
    const repoLang = await extractRepoLang(repo['name'])
    repoArr.push({ name: repo['name'], des: repo['description'], url: repo['html_url'], lang: repoLang })

  }

  try {
    const response = await fetch('/.netlify/functions/writeFile', {
      method: 'POST',
      body: JSON.stringify(repoArr),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error calling serverless function:', error);
    throw new Error('Error calling serverless function');
  }
};

export async function pullGitInfo() {
  const allGitInfo = await readJSONFile()
  return allGitInfo
}

writeJSONFile()


