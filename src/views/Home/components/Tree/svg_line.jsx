import React from 'react';
import Ai from './ai'; // Assuming you have Ai.jsx
import History from './history'; // Assuming you have History.jsx
import Personal from './personal'; // Assuming you have Personal.jsx

const SvgLine = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    width: '300px',
    height: '150px',
  };

  const imageStyle = {
    width: '300px',
    height: '100px',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: 'bold', // Make the title bold
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .svg-container {
        flex-direction: column;
      }
    }
  `;

  return (
    <div>
      {/* Media Query style for responsiveness */}
      <style>{mediaQueryStyle}</style>
      <div className="svg-container" style={containerStyle}>
        <div className="svg-item" style={itemStyle}>
          <h3 style={titleStyle}>AI Data Center</h3>
          {/* Use JSX Component instead of <img> */}
          <div style={imageStyle}>
            <Ai />
          </div>
        </div>
        <div className="svg-item" style={itemStyle}>
          <h3 style={titleStyle}>History Line</h3>
          {/* Use JSX Component instead of <img> */}
          <div style={imageStyle}>
            <History />
          </div>
        </div>
        <div className="svg-item" style={itemStyle}>
          <h3 style={titleStyle}>Personal Line</h3>
          {/* Use JSX Component instead of <img> */}
          <div style={imageStyle}>
            <Personal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgLine;
