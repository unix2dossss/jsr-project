import React, { useState } from 'react';
import './grid.css';

const MainMenu = ({ onStart }) => (
  <div className="main-menu">
    <div className="center-content">
      <h1 className="main-title">Welcome to BEAT-hoven!</h1>
      <p className="subtitle">A place where different music cultures come together</p>
      <button className="start-button" onClick={onStart}>
        Start Creating
      </button>
    </div>
  </div>
);

const Grid = () => {
  const [theme, setTheme] = useState('default');
  const [showContent, setShowContent] = useState(false);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleStart = () => {
    setShowContent(true);
  };

  const handleExit = () => {
    setShowContent(false);
  };

  return (
    <div className={`grid-container theme-${theme}`}>
      {!showContent ? (
        <MainMenu onStart={handleStart} />
      ) : (
        <>
          <div className="grid-item no-hover instruments">Instruments/Era</div>
          <div className="grid-item no-hover menu">Indian Classical</div>
          <div className="grid-item no-hover main">European Classical</div>
          <div className="grid-item no-hover right">Right</div>
          <div className="grid-item no-hover footer">Footer</div>
          <div className="grid-item">Chords</div>
          <div className="grid-item">Item 7</div>
          <div className="grid-item">Item 8</div>
          <div className="grid-item">Item 9</div>
          <div className="grid-item">Item 10</div>
          <div className="grid-item">Drums</div>
          <div className="grid-item">Item 12</div>
          <div className="grid-item">Item 13</div>
          <div className="grid-item">Item 14</div>
          <div className="grid-item">Item 15</div>
          <div className="grid-item">Percussion</div>
          <div className="grid-item">Item 17</div>
          <div className="grid-item">Item 18</div>
          <div className="grid-item">Item 19</div>
          <div className="grid-item">Item 20</div>
          <div className="grid-item">Hihat</div>
          <div className="grid-item">Item 22</div>
          <div className="grid-item">Item 23</div>
          <div className="grid-item">Item 24</div>
          <div className="grid-item">Item 25</div>

          <div className="exit-button" onClick={handleExit}>
            Exit
          </div>

          <div className="theme-switcher">
            <button
              className={`theme-button${theme === 'default' ? ' active' : ''}`}
              onClick={() => handleThemeChange('default')}
            >
              Default Theme
            </button>
            <button
              className={`theme-button${theme === 'dark' ? ' active' : ''}`}
              onClick={() => handleThemeChange('dark')}
            >
              Dark Theme
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Grid;

/* Rest of your CSS code */
