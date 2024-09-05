import './second_cont.css'
import React, { useState } from 'react'
import { useCallback } from 'react'
import Info from './components/info'
import Creds from './components/creds'
import Resume from './components/resume'

const SecondCont = () => {
    const [activeTab, setActiveTab] = useState('info'); // Set the initial activeTab state to 'home'
    const handleTabClick = useCallback((tab) => {
        setActiveTab(tab);
    }, [setActiveTab]);
    return (
        <div id="second_cont">
            <div className='row'>
                <div className='display-4 text-white'>About me</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button className={`flex-items ${activeTab === 'info' ? 'activeButton' : ''}`} onClick={() => handleTabClick('info')}>
                    <h5>Information</h5>
                </button>
                <button className={`flex-items ${activeTab === 'creds' ? 'activeButton' : ''}`} onClick={() => handleTabClick('creds')}>
                    <h5>Credentials</h5>
                </button>
                <button className={`flex-items ${activeTab === 'resume' ? 'activeButton' : ''}`} onClick={() => handleTabClick('resume')}>
                    <h5>Resume</h5>
                </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', height: "40%" }}>
                <div className='display' style={{ display: activeTab === 'info' ? 'block' : 'none', padding: '10px' }}>
                    <Info />
                </div>
                <div id="creds_resume" className='display' style={{ display: activeTab === 'creds' ? 'block' : 'none' }}>
                    <Creds />
                </div>

                <div id="creds_resume" className='display' style={{ display: activeTab === 'resume' ? 'block' : 'none' }}>
                    <Resume />
                </div>
            </div>
        </div>
    );
};



export default SecondCont;



