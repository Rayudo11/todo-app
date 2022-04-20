import React from 'react'

function TodoInput(props) {

  return (
    <section>
    <label for="todos">Todos:</label>
    <input
      type="text"
      name="todos"
      onChange={props.handleChange}
      value={props.todo}
     />
     <button onClick={props.handleClick}>Submit</button>
     </section>
  )
}

export default TodoInput