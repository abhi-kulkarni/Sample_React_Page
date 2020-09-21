import React, {useEffect} from 'react';
import './App.css';
import {appendScript} from '../src/components/appendScript'


function App() {

  useEffect(() => {
    appendScript('../src/static/js/main');
  }, []);

  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-3">.col-md-1</div>
        <div className="col-lg-9">.col-md-2</div>
    </div>
    </div>
  );
}

export default App;
