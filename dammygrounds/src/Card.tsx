import React, {FC} from 'react';
import background from './img/pizza.jpg';
import bg from './logo192.png';

interface CardProps {
    id: number;
    name: string;
    attack: number;
    health: number;
    text?: string;
    type?: string;
}

const Card:FC<CardProps> = (props)  => {
  return (
    <div className='card' style={{backgroundImage: `url(${background})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
        <div >{props.id}</div>
        <div>{props.name}</div>
        <div>{props.attack}</div>
        <div>{props.health}</div>
        <div>{props.text}</div>
    </div>
  )
}

export default Card;
