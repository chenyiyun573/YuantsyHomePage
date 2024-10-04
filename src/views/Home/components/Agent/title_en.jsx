import React from 'react';

const Title_EN = () => {
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
        Let AI handle the repetitive, free you{' '}
      </span>
      <br className="max-lg:hidden" />
      <span
        style={{
          fontSize: '2.5rem',
          color: '#6b7280',
        }}
      >
        with{' '}
      </span>
      <span
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#000000', // Black color for emphasis
        }}
      >
        Yuantsy Desktop Agent
      </span>
    </h1>
  );
};

export default Title_EN;
