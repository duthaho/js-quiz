import React from 'react';
import './bio.css';

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: 'center',
        marginBottom: '30px',
        fontSize: '14px'
      }}
    >
      <p>
        Cùng nhau luyện tập kỹ năng JavaScript - 1977 câu hỏi xoáy đáp xoay với <a href="https://duthaho.com">duthaho</a>!
      </p>
    </div>
  );
};

export default Bio;
