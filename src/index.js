import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './SomeComponent';

let array = ['blue', 'green', 'yellow'];

ReactDOM.render(
  <SomeComponent>
    {array.map(color=> <div>{color}</div>)}
  </SomeComponent>,
  document.getElementById('root')
)
