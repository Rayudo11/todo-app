import React from 'react'

const Todo = (props) => {
    
  return (
    <li key={props.todo.id}>{props.todo.todo}</li>
  )
}

export default Todo;
