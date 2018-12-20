import React from 'react'

function TodoList(props){
  return (
    <ul>
      {
        props.todos.map(todo => 
          <li style={todo.completed ? { textDecoration: 'line-through' } : null } >

            <button onClick={() => props.handleComplete(todo)}>Complete</button>
            <button onClick={() => props.handleDelete(todo)}>Delete</button>
            { todo.description }
          </li>
        )
      }
    </ul>
  )
}

export default TodoList