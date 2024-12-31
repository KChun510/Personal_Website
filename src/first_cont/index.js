import './first_cont.css';
import { pullGitInfo } from '../actions';
import RepoButton from './components/repoButton';
import { useQuery } from 'react-query';

const FirstCont = () => {
    const { data: repos, isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => await pullGitInfo()
    });

    return (
        <div id='first_cont'>
            <div className="row mt-1 mx-4 min-vh-75">
                <div className="col-lg px-auto">
                    <h1 className="display-1">Kyle Chun</h1>
                    <h6 className="display-6">Computer Science Student</h6>
                    <div id='video' className="ratio rounded shadow border border-3 border-dark rounded">
                        <iframe title='my_video' src="https://drive.google.com/file/d/1ylyMX7dNSRdGZ4AtAJ6ucKKws4FhTnG4/preview" allowFullScreen></iframe>
                    </div>
                    <div className="small_text">
                        <small>{<b> Uploaded: 06/01/2020  </b>}</small>
                    </div>

                </div>

                <div className="col-md mt-5 px-5">
                    <div className="container mt-5 px-auto">
                        <h5 className="display-5">Projects</h5>
                    </div>
                    <div className="passion overflow-auto w-100 ml-3 border border-2 border-dark rounded">
                        <div className="list-group" id='appending_repos'>
                            {repos ? repos.map(({ name, des, url, lang }) => <RepoButton key={name} name={name} des={des} url={url} lang={lang} />) : null}
                        </div>
                    </div>
                    <div className="small_text mr-10">
                        <small>{isLoading ? <b>Loading Public Projects...</b> : <b> Public Project Count: {repos.length} </b>}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstCont;

