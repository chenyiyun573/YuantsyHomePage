import React from 'react';

const AppButtons_CN = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .button-container {
              flex-direction: column;
              align-items: center;
            }
            .button-container a {
              margin-bottom: 1rem; // Adds space between stacked buttons
              width: 80%; // Makes buttons wider on smaller screens
            }
            .button-container a:last-child {
              margin-bottom: 0; // Removes bottom margin from the last button
            }
          }
        `}
      </style>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '5px 0' }}>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#4a5568',
            marginBottom: '2rem',
            textAlign: 'center',
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
            padding: '10px 0',
          }}
        >
          <div
            className="button-container"
            style={{
              maxWidth: '48rem',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            {/* MacOS App Button */}
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
                width: '160px',
                height: '64px',
              }}
            >
              <span>MacOS客户端 →</span>
            </a>

            {/* Windows App Button */}
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
                width: '160px',
                height: '64px',
              }}
            >
              <span>Windows客户端 →</span>
            </a>

            {/* Learn More Button */}
            <a
              href="https://tree.yuantsy.com/todo.html"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1a202c',
                backgroundColor: '#ffffff',
                textDecoration: 'none',
                borderRadius: '0.375rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width: '100px',
                height: '64px',
                marginLeft: '1rem',
              }}
            >
              <span>了解更多</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppButtons_CN;
