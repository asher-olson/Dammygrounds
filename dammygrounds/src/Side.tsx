import { createReadStream } from 'fs';
import React, {FC} from 'react';
import Card from './Card';
import CardObj from './CardObj';

interface SideProps {
    class: string;  //either for board or player
    cards: Array<CardObj>;
}

const Side:FC<SideProps> = (props) => {
  return (
    <div className={props.class}>{props.cards.map((card) => {
        return <Card id={card.id} name={card.name} attack={card.attack} health={card.health} text={card.text} />
    })}</div>
  )
}

export default Side;
