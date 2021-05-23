import React from 'react';
import './CardList.css';
import CardType from './CardType';

const CardList = (props) => {
    console.log(props);
    return (
        <div className= "card-list">
            {props.monsters.map(monster => (
                < CardType key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}

export default CardList;
