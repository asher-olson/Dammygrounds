import React, {FC} from 'react';

interface CardProps {
    id: number;
    name: string;
    attack: number;
    health: number;
    text?: string;
}

const Card:FC<CardProps> = (props)  => {
  return (
    <div className='card'>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.attack}</div>
        <div>{props.health}</div>
        <div>{props.text}</div>
    </div>
  )
}

export default Card;
