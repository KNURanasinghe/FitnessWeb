import React, { useState } from 'react';
import './homePage.css';

const Results = () => {
  const [textBoxValue, setTextBoxValue] = useState('');

  const handleTextBoxChange = (e) => {
    setTextBoxValue(e.target.value);
  };

  return (
    
    <div>
      <div className='cont'>
      <div className='detail'>
        <h2>hi</h2>
      </div>
      </div>
      <div className="banner-container">
        <div className="container">
          <div className="centered-container">
            <div className="col">
              <h2>Meal Plan</h2>
            </div>
            <br></br>
            <div className='text-center1'>
              <input
                type="text"
                className="textb" 
                placeholder="Enter your text here"
                value={textBoxValue}
                onChange={handleTextBoxChange}
                style={{ width: '730px', height: '500px' }}
              />
            </div>
          </div>
          <div className="centered-container">
            <div className="col">
              <h2>Workout Routine</h2>
            </div>
            <br></br>
            <div className='text-center1'>
              <input
                type="text"
                className="textb" 
                placeholder="Enter your text here"
                value={textBoxValue}
                onChange={handleTextBoxChange}
                style={{ width: '730px', height: '500px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
