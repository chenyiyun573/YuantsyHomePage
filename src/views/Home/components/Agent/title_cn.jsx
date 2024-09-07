import React from 'react';

const Title_CN = () => {
  return (
    <h1
      className="font-bold mb-6 border-t border-b border-transparent"
      style={{
        fontSize: '3rem', // Maintains the specific font size for the overall h1
        borderImage: 'linear-gradient(to right, transparent, rgba(107, 114, 128, 0.8), transparent) 1',
      }}
      data-aos="zoom-y-out"
      data-aos-delay="150"
    >
      {/* Line 1: Text with specific color and font size */}
      <span className="block lg:inline" style={{ fontSize: '2.5rem', color: '#6b7280' }}>
        琐事交给AI，释放你的想象。
      </span>
      {/* Line break for responsive adjustment */}
      <br className="hidden lg:block" />
      
      {/* Line 2 and Line 3 on the same line: Text with specific color and font size */}
      <span style={{ fontSize: '2.5rem', color: '#6b7280', display: 'inline' }}>
        就用{' '}
      </span>
      <span style={{ fontSize: '3rem', color: '#000000', fontWeight: 'bold', display: 'inline' }}>
        源子桌面智能
      </span>
    </h1>
  );
};

export default Title_CN;
