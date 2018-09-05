import React from 'react';
import { data } from './data';

const Card = (props) => {
    return (
        <div>
            <div>{props.time}</div>
            <img src={props.icon} />
            <div>{props.temp}</div>
        </div>
    )
}

export default Card;