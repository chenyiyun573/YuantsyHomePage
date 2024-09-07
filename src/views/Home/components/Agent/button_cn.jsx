import React from 'react';

const AppButtons_CN = () => {
  return (
    <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '5px 0' }}> {/* Padding added for spacing */}
      <p
        style={{
          fontSize: '1.125rem',
          color: '#4a5568', // Tailwind's text-gray-700 equivalent
          marginBottom: '2rem',
        }}
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        Yuantasy Desktop Agent是一款智能AI远程控制软件，助您轻松完成计算机的各项任务，<br></br>让您的工作和生活更高效、便捷。
      </p>
      <div
        style={{
          position: 'relative',
          borderTop: '1px solid transparent',
          borderBottom: '1px solid transparent',
          borderImage:
            'linear-gradient(to right, transparent, rgba(107, 114, 128, 0.8), transparent) 1',
          padding: '10px 0', // Ensuring 5px space above and below the border
        }}
      >
        <div
          style={{
            maxWidth: '48rem', // Updated to a larger max-width to allow buttons to expand properly
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem', // Space between buttons
            flexWrap: 'wrap', // Allow wrapping for smaller screens
          }}
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          {/** MacOS App Button */}
          <a
            href="https://tree.yuantsy.com/todo.html"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              background: 'linear-gradient(to top, #2563eb, #3b82f6)', // Tailwind's from-blue-600 to-blue-500 equivalent
              textDecoration: 'none',
              borderRadius: '0.375rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'background-size 0.3s',
              width: '160px', // Width of the button
              height: '64px', // Height set to maintain the 0.618 ratio (200 * 0.618 = 124)
            }}
          >
            <span>MacOS客户端 -&gt;</span>
          </a>

          {/** Windows App Button */}
          <a
            href="https://tree.yuantsy.com/todo.html"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              background: 'linear-gradient(to top, #2563eb, #3b82f6)',
              textDecoration: 'none',
              borderRadius: '0.375rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'background-size 0.3s',
              width: '160px', // Width of the button
              height: '64px', // Height set to maintain the 0.618 ratio (200 * 0.618 = 124)
            }}
          >
            <span>Windows客户端 -&gt;</span>
            
          </a>

          {/** Learn More Button */}
          <a
            href="https://tree.yuantsy.com/todo.html"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1a202c', // Tailwind's text-gray-800 equivalent
              backgroundColor: '#ffffff',
              textDecoration: 'none',
              borderRadius: '0.375rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              width: '100px', // Width of the button
              height: '64px', // Height set to maintain the 0.618 ratio (200 * 0.618 = 124)
              marginLeft: '1rem', // Space after the last button
            }}
          >
            了解更多
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppButtons_CN;
