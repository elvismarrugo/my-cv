import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import resumeData from './data/resumeData';

const App = () => {
  return (
    <header>
      <div className='wrapper'>
        <div className='sidebar'>
          <About
            avatar={resumeData.avatar}
            name={resumeData.name}
            website={resumeData.website}
            profession={resumeData.profession}
            email={resumeData.email}
            celular={resumeData.celular}
            bio={resumeData.bio}
            address={resumeData.address}
            social={resumeData.social}
          />
        </div>

        <div className='content-wrapper'>
          <div className='content'>
            <Experience experience={resumeData.experience} />
            <Certificate certificate={resumeData.certificate} />
            <HardSkills hardskills={resumeData.hardskills} />
            <SoftSkills softskills={resumeData.softskills} />
            <Education education={resumeData.education} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default App;
