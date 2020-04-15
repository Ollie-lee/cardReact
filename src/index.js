import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function StudentCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>Age: {props.age}</div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <StudentCard name="jane" age={15}/>
    <StudentCard name="tom" age={6}/>
    <StudentCard name="jerry" age={1}/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
