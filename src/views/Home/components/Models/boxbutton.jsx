import React from 'react';

const BoxButton = () => {
  const buttonStyles = {
    display: 'block',
    width: '100%',
    maxWidth: '400px', // Maximum width of the button
    padding: '16px 24px', // Padding for the "box" effect
    margin: '20px auto', // Centers the button
    backgroundColor: '#1E3A8A', // Darker blue background
    color: 'white', // White text
    fontSize: '18px', // Larger font size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Centered text
    borderRadius: '10px', // Rounded corners
    border: '2px solid #1E40AF', // Border for a more defined "box" look
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Shadow for depth
    cursor: 'pointer', // Pointer cursor on hover
    transition: 'background-color 0.3s ease', // Smooth transition
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#111E5A'; // Even darker blue on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#1E3A8A'; // Original darker blue color on mouse leave
  };

  return (
    <a
      href="https://service.yuantsy.com"
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Yuantsy Service Platform <br></br><br></br>
      访问源子模型推理平台
    </a>
  );
};

export default BoxButton;
