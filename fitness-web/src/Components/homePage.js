import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import './homePage.css';
import bottomLeftImage from '../Asset/web.jpg';

const HomePage = () => {
  const [name] = useState('Asanga');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [diseases, setDeseases] = useState('');
  const [file, setFile] = useState(null);

  const history = useHistory();

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleDeceicesChange = (e) => {
    setDeseases(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a file before submitting.');
      return;
    }
    history.push('/results');
  };

  return (
    <div>
      <Header />
      <div className="banner-container">
        <div className="container">
          <div className="centered-container">
            <div className="col">
              <h2>Hello {name} 👋 ...</h2>
            </div>
            <br></br>
            <div className="col1">
              <h4>Enter your details here</h4>
            </div>
            <br></br>
            <br></br>
            <div id="col2" className="col2">
              <form onSubmit={handleSubmit}>
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="height">Height (cm):</label>
                      </td>
                      <td>
                        <input type="text" id="height" value={height} onChange={handleHeightChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="weight">Weight (kg):</label>
                      </td>
                      <td>
                        <input type="text" id="weight" value={weight} onChange={handleWeightChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="diseases">Chronic Deseases :</label>
                      </td>
                      <td>
                        <input type="text" id="diseases" value={diseases} onChange={handleDeceicesChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="file">Upload Report:</label>
                      </td>
                      <td>
                        <input type="file" id="file" onChange={handleFileChange} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <div className="button-container">
                <button type="submit" className="submit-button">
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src={bottomLeftImage} alt="Bottom Left Image" className="bottom-left-image" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
