import React from 'react';

function CTABanner(props) {
  return (
    <div className={`p-10 flex flex-col items-center justify-center ${props.darkMode ? 'bg-primaryPurple' : 'bg-mediumBeige'}`}>
      <p className={`text-3xl ${props.darkMode ? 'text-white' : 'text-primaryPurple'}`}>{props.titel}</p>
    </div>
  );
}

export default CTABanner;
