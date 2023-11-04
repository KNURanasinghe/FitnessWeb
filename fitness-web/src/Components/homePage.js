import React, { useState } from 'react';
import './homePage.css';
import Header from './header';
import Footer from './footer';

const HomePage = () => {
  const [name] = useState('Nidarshana');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [file, setFile] = useState(null);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission (for demonstration purposes)

    // Clear the form fields
    setHeight('');
    setWeight('');
    setFile(null);
  };

  return (
    <div>
      <Header></Header>
      <div className="banner-container">
        <div className="container">
          <div className="centered-container">
            <div className="col">
              <h2>Hello {name} 👋 ...</h2>
            </div>
            <br></br>
            <div className="col1">
              <h4>Enter your details here </h4>
            </div>
            <br></br><br></br>
            <div className="col2">
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
                        <label htmlFor="file">Upload Report:</label>
                      </td>
                      <td>
                        <input type="file" id="file" onChange={handleFileChange} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
