import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Item = ({item, onDelete, onClick}) => { 
  return (
    <div className='item' onClick={ () => onClick(item.id)}>
        <h3>{item.text} <FaTimes style = {{color:'red', cursor:'pointer'}} onClick={() => onDelete(item.id)}/></h3>
        <p>Price - ${item.price}</p>
        <p>Participants - {item.participants}</p>
    </div>
  )
}

export default Item