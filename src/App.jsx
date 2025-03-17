import React, { useState } from 'react';
import './App.css';
import SidePic from './components/sidePic';
import SkillSet from './components/SkillSet';
import History from './components/History';
import Goal from './components/Goal';

const App = () => {
  const [pageName, setPageName] = useState("Skill Set");
  const [currentComponent, setCurrentComponent] = useState(<SkillSet />);

  const handleButtonClick = (page) => {
    if (page === "Skill Set"){
      setCurrentComponent(<SkillSet />)
    }else if (page === "History"){
      setCurrentComponent(<History />)
    }else if (page === "Goal"){
      setCurrentComponent(<Goal />)
    }

    setPageName(page);
  };

  return (
    <div className="container">
      <aside className="aside">
        <SidePic />
      </aside>

      <div className="side">
        <div className="nav">
          <h1>{pageName}</h1>
          <h3>{pageName}</h3>
          <ul>
            <li><button className={pageName === "Skill Set" ? "active" : ""} onClick={() => handleButtonClick("Skill Set")}>Skill Set</button></li>
            <li><button className={pageName === "History" ? "active" : ""} onClick={() => handleButtonClick("History")}>History</button></li>
            <li><button className={pageName === "Goal" ? "active" : ""} onClick={() => handleButtonClick("Goal")}>Goal</button></li>
          </ul>
        </div>
        <hr />
        {currentComponent}
      </div>
    </div>
  );
};

export default App;
