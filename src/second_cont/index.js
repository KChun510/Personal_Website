import './second_cont.css';
import React, { useState } from 'react';

const SecondCont = () => {
    const [activeTab, setActiveTab] = useState('home'); // Set the initial activeTab state to 'home'

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div id='second_cont'>
            <div className='row'>
                <div className='display-4 text-white'>About me</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button className={`flex-items ${activeTab === 'home' ? 'activeButton' : ''}`} onClick={() => handleTabClick('home')}>
                    <h5>Information</h5>
                </button>
                <button className={`flex-items ${activeTab === 'profile' ? 'activeButton' : ''}`} onClick={() => handleTabClick('profile')}>
                    <h5>Credentials</h5>
                </button>
                <button className={`flex-items ${activeTab === 'messages' ? 'activeButton' : ''}`} onClick={() => handleTabClick('messages')}>
                    <h5>Resume</h5>
                </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', height: "40%" }}>
                <div className='display' style={{ display: activeTab === 'home' ? 'block' : 'none', padding: '10px' }}>
                    <div className='row'>
                        <div className='col-1  hidden-mobile'></div>
                        <div className='col' id='info_cont'>
                            <h5>Summary :</h5>
                            A college student who fell in love with coding. I was born and raised in Oakland, CA, and my in-person mannerisms will reflect that. Growing up, piecing together legos from an enormous miscellaneous bin took hold of my entire childhood. Coding has drawn me in the same way and has replaced my Lego obsession. Instead of picking up random blocks from a bin, I'm now picking up languages, libraries, and frameworks to build my next creation!! Constantly pushing myself to learn new computer science skills to extend my capabilities.
                            <br></br>
                            <br></br>
                            <h6>Personal Interest :</h6>

                            Coding
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                                viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            Music

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                                viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            Creation
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                                viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            Coffee
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                                viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            Cars
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                                viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            Fitness
                        </div>


                        <div className="hidden-mobile col" id='img' >
                            <img src="https://github.com/KChun510/Web-Assets/blob/main/web.png?raw=true" className="img-thumbnail img1" alt="self portrait"></img>
                        </div>
                    </div>
                </div>
                <div className='display' style={{ display: activeTab === 'profile' ? 'block' : 'none' }} id='creds_Resume'>
                    <h5> School Courses - Laney college : </h5>
                    <b> CIS 25 </b> - Programming using c++ (A+) &nbsp; <b> CIS 27 </b> - Data Structures and Algorithms
                    (A)
                    <br></br>
                    <b> CIS 61 </b> - Struc/Object Oriented Programming (A)
                    <br></br>
                    <br></br>
                    <h5> Certifications :</h5>
                    <b>Automation Pro Workato</b> - Issued Aug, 2023 &nbsp;
                    <br></br>
                    <b>Google It Support Proffesional</b> - Issued Feb, 2021 &nbsp;
                    <br></br>
                    <b>Excel Proficiency </b> - Issued Sep, 2020 &nbsp;
                </div>

                <div className='display' style={{ display: activeTab === 'messages' ? 'block' : 'none' }} id='creds_Resume'>

                    <b> Credit Karma</b> - IT Engineer Intern &nbsp; (May 2023 - Aug 2023)
                    <br></br>


                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg> Collect data on 200+ terminated employees, using a web crawler built with python.
                    <br></br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg> Data cleanup on Inventory & device management systems on 4500+ machines, automation built in python.

                    <br></br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg> Automate Inventory system. Using the oomnitza API and barcode scanners.

                    <br></br>
                    <br></br>



                    <b> OnPoint Document Outsourcing </b> - IT Consultant &nbsp; (Oct 2020 - Sep 2021)
                    <br></br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Responsible for securing local network and improving its security to meet industry standards.

                    <br></br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg> Conduct penetration testing on association's network to identify and address cyber security
                    threats.
                    <br></br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg> Implemented quarterly security checks to identify and address new possible vulnerabilities.
                    <br></br>


                    <br></br>


                    <b> Technical skills :</b>
                    <br></br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Proficient: C++, Python, HTML, JavaScript
                    <br></br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Physical Server Assembly/maintenance, Computer assembly
                    <br></br>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    Cybersecurity, Networking, Penetration Testing, Network Security


                    <br></br>
                    <br></br>

                    <div className="container w-100 h-25 text-center">
                        <a href="https://docs.google.com/document/d/1fzqxueGqjhMUBqfE1Q12z9S2X3bAPbeKIDESDi2UlE4/edit?usp=sharing"
                            target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-outline-primary btn-sm">Veiw full resume </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SecondCont;



