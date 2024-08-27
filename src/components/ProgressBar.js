import React, { useEffect } from 'react';

const ProgressBar = () => {
  useEffect(() => {
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      document.getElementById('progressBar').style.width = `${scrolled}%`;
    };
  }, []);

  return (
    <div className="progress-container">
      <div id="progressBar" className="progress-bar"></div>
    </div>
  );
};

export default ProgressBar;
