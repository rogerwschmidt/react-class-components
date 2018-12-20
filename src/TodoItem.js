import React from 'react'

const TodoItem = ({todo, handleComplete, handleDelete}) => 
  <li >
    <button onClick={() => handleComplete(todo)}>Complete</button>
    <button onClick={() => handleDelete(todo)}>Delete</button>
    { todo.description }
    <span>
      {
        todo.completed ? '(Completed)' : null
      }
    </span>
  </li>

export default TodoItem