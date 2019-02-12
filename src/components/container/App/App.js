import React from 'react';
import ReactDOM from 'react-dom';

import './App.scss';

const App = () => {
  return (
    <div id="app">
      <h1>App component works!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));