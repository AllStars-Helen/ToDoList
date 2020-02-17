import React from 'react';
import Start from './screens/ScreenStart';
import Create from './screens/ScreenCreateList';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

let visited = localStorage["alreadyVisited"];

console.log(visited);

function App () {
  <BrowserRouter>
    return (
    if (visited) {
      <div className="App" id="root">
        <Create />
      </div>
    } else {
      localStorage["alreadyVisited"] = true,
      <div className="App" id="root">
        <Start />
      </div>
    }
    );
  </BrowserRouter>
}

export default App;
