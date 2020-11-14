import React from 'react'
import Card from '../card/card.component';
import './card-list.style.css'
function CardList(props) {
    return (
        <div className="card-list">
          {props.monsters.map((m) => (
          <Card key={m.id}  monster={m}/>
          ))}        
          </div>
    )
}

export default CardList
