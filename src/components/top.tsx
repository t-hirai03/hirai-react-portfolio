import React from 'react';
import logo from '../assets/image/top/logo.svg';
import '../assets/scss/top.scss';

function App() {

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    console.log("確認");
  };

  return (
    <div className="App" onClick={handleClick}>
      {/* <button onClick={handleClick}>test</button> */}
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
