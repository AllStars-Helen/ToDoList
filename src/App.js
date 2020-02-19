import React from 'react';
import Start from './screens/ScreenStart';
import Create from './screens/ScreenCreateList';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

let visited = localStorage['alreadyVisited'];

const App = () => (
  <BrowserRouter>
    {visited ? (
      <div className="App" id="root">
        <Create />
      </div>
    ) : (
      (localStorage['alreadyVisited'] = true ? (
        <div className="App" id="root">
          <Start />
        </div>
      ) : null)
    )}
  </BrowserRouter>
);

export default App;
