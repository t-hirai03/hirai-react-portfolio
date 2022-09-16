import React from 'react';
import '../assets/scss/header.scss';

function header() {

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    console.log("確認");
  };

  return (
      <header className="header-contents">
        <p>
          header.tsx 確認
        </p>
        <a
          className="header-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}

export default header;
