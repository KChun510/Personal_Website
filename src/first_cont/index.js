import './first_cont.css'
import { Octokit } from "octokit";
import { useEffect } from "react";


const FirstCont = () => {
    var repo_dic = {}; /* I.e: {repo_nam : [description, langauge, url]} */

    var count = 1;

    const octokit = new Octokit({
        auth: process.env.REACT_APP_API_KEY,

    });

    async function Get_repo() {
        var obj_div = document.getElementById('appending_repos');
        const repos = await octokit.request('GET /users/{username}/repos', {
            username: 'KChun510',
            sort: 'updated',
            direction: 'dsc',
            headers: {
                'X-Github-Api-Version': '2022-11-28'
            }
        });
        const repo_arr = repos['data']
        console.log(repo_arr)

        for (var repo in repo_arr) {
            count += 1;
            repo_dic[repo_arr[repo]['name']] = [repo_arr[repo]['description'], repo_arr[repo]['clone_url'], repo_arr[repo]['language']]


            var html_append = "<a href='" + repo_arr[repo]['clone_url'] + "' target='_blank' rel='noopener noreferrer' class='list-group-item list-group-item-action menu1'>" +

                "<div class='d-flex w-100 justify-content-between'>" +
                "<h5 class='mb-1 text'>" + repo_arr[repo]['name'] + "</h5>" +
                "</div>" +
                "<p class='mb-1'> " + repo_arr[repo]['description'] + " </p> ";


            /* Need to make an API request for git hub languages */
            var languages = await octokit.request('GET /repos/{owner}/{repo}/languages', {
                owner: 'KChun510',
                repo: repo_arr[repo]['name'],
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })

            console.log(languages['data']);

            for (var key in languages['data']) {
                switch (key) {
                    case 'CSS':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='black' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/>" +
                            "</svg>CSS" +
                            "</small>";
                        break

                    case 'JavaScript':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='yellow' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/>" +
                            "</svg>JavaScript" +
                            "</small>";

                        break
                    case 'Python':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill ='orange' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/>" +
                            "</svg>Python" +
                            "</small>";

                        break

                    case 'C++':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='blue' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/>" +
                            "</svg>C++" +
                            "</small>";

                        break
                    case 'HTML':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='green' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/> " +
                            "</svg>HTML" +
                            "</small> ";

                        break
                    case 'PHP':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='purple' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/> " +
                            "</svg>PHP" +
                            "</small> ";
                        break
                    case 'TypeScript':
                        html_append += "<small class='text'>" +
                            "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='cornflowerblue' class='bi bi-dot' viewBox='0 0 16 16'>" +
                            "<path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/> " +
                            "</svg>TypeScript" +
                            "</small> ";
                        break
                    case 'null':
                        html_append += "N/A"
                        break
                    default:
                        break
                }

            }



            obj_div.innerHTML += html_append + "</a>";
        }

        var obj_div_count = document.getElementById("small_count");
        obj_div_count.innerHTML = '' + count + ': Repos from github.'


    };


    useEffect(() => {
        Get_repo();
        ;
    })
    return (
        <div id='first_cont'>
            <div className="row mt-1 mx-4 min-vh-75">
                <div className="col-lg px-auto" >
                    <h1 className="display-1">Kyle Chun</h1>
                    <h6 className="display-6 "> Computer Science Student </h6>
                    <div id='video' className="ratio rounded shadow border border-3 border-dark rounded  " >
                        <iframe title='my_video' src="https://drive.google.com/file/d/1ylyMX7dNSRdGZ4AtAJ6ucKKws4FhTnG4/preview" allowFullScreen></iframe>
                    </div>
                </div>


                <div className="col-md mt-5 px-5">
                    <div className="container mt-5 px-auto">
                        <h5 className="display-5">  Projects </h5>
                    </div>
                    <div className="passion overflow-auto w-100 ml-3 border border-2 border-dark rounded">
                        <div className="list-group" id='appending_repos'>
                        </div>
                    </div>
                    <div className="small_text">
                        <small><b id="small_count">Loading Git Hub Repos</b></small>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default FirstCont;
