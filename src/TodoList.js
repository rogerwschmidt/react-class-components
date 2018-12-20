import React from 'react'

import TodoItem from './TodoItem'

function TodoList(props){
  return (
    <ul>
      {
        props.todos.map(todo => 
          <TodoItem 
            todo={todo} 
            handleComplete={props.handleComplete} 
            handleDelete={props.handleDelete}/>
        )
      }
    </ul>
  )
}

export default TodoList