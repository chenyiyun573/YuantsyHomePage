import React from 'react';

const Title_CN = () => {
  return (
    <h1
      style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        borderTop: '1px solid transparent',
        borderBottom: '1px solid transparent',
        borderImage:
          'linear-gradient(to right, transparent, rgba(107, 114, 128, 0.8), transparent) 1',
      }}
      data-aos="zoom-y-out"
      data-aos-delay="150"
    >
      <span
        style={{
          fontSize: '2.5rem',
          color: '#6b7280', // Slate-500 equivalent color in Tailwind
        }}
      >
        琐事交给AI，释放你的想象。
      </span>
      <br className="max-lg:hidden" />
      <span
        style={{
          fontSize: '2.5rem',
          color: '#6b7280',
        }}
      >
        就用{' '}
      </span>
      <span
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000000', // Black color for emphasis
        }}
      >
        源子桌面智能
      </span>
    </h1>
  );
};

export default Title_CN;
