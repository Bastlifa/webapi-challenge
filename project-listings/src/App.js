import React from 'react';
import { Route } from 'react-router-dom'
import ProjectList from './components/ProjectList'

import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path='/projects' component={ProjectList} />
        {/* <Route exact path='/projects/:id' component={Project} /> */}
    </div>
  );
}

export default App;
