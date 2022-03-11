import React, {FC} from 'react';
import CardObj from './CardObj';
import Side from './Side';

interface BoardProps {
    playerSide: Array<CardObj>;  //array of objects to make cards with, make class for this?
    tavernSide: Array<CardObj>;
}

const Board:FC<BoardProps> = (props) => {
  return (
    <div className='board'>
        <Side class={"tavern-side"} cards={props.playerSide} />
        <Side class={"player-side"} cards={props.tavernSide} />
    </div>
  )
}

export default Board;
