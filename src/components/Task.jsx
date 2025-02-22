import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onClick}) => { 
  return (
    <div className='task' onClick={ () => onClick(task.id)}>
        <h3>{task.text} <FaTimes style = {{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
        <p>Price - ${task.price}</p>
    </div>
  )
}

export default Task