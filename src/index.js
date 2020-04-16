import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Card(props) {
  return (
    <div className="card">
      {/* <h1>{props.name}</h1>
      <div>Age: {props.age}</div> */}
      <h6>Editors' Picks</h6>
      <img className="card-img" src="{props.img}" alt="gift description"></img>
      <h6>{props.title}</h6>
      <p>{props.subTitle}</p>
    </div>
  );
}

ReactDOM.render(
  <div >
    {/* <Card name="jane" age={15}/>
    <Card name="tom" age={6}/>
    <Card name="jerry" age={1}/> */}
    <Card img="cardImg.jpg" title="Gifts for him" subTitle="For Valentine's Day"/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
