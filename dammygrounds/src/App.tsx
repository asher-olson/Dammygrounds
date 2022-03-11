import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Board from './Board';
import CardObj from './CardObj';
import Draggable from "react-draggable";
const uuid = require('react-uuid');

function App() {
  let pcopy: Array<CardObj> = [];
  pcopy.push(new CardObj(uuid(), "asher", 20, 40, "go big mode"));
  pcopy.push(new CardObj(uuid(), "kekleo", 12, 12, "go big mode"));
  pcopy.push(new CardObj(uuid(), "xander", 1, 1, "go big mode"));
  pcopy.push(new CardObj(uuid(), "damny", 21, 40, "go big mode"));

  let tcopy: Array<CardObj> = [];
  tcopy.push(new CardObj(uuid(), "asher", 20, 40, "go big mode"));
  tcopy.push(new CardObj(uuid(), "kekleo", 12, 12, "go big mode"));
  tcopy.push(new CardObj(uuid(), "xander", 1, 1, "go big mode"));
  tcopy.push(new CardObj(uuid(), "damny", 21, 40, "go big mode"));

  const [playerCards, setPlayerCards] = useState(pcopy);
  const [tavernCards, setTavernCards] = useState(tcopy);

  return (
    <div className="App">
      <Board playerSide={playerCards} tavernSide={tavernCards} />
      <Draggable>
        <div>I can be moved pog!</div>
      </Draggable>
    </div>
  );
}

export default App;
