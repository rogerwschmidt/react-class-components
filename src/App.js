import React, { Component } from 'react';
import shortId from 'shortid'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [
        { id: shortId.generate(), description: 'Gotta go fast', completed: false },
        { id: shortId.generate(), description: 'Recover chaos emeralds', completed: false },
        { id: shortId.generate(), description: 'Find time to chill with Tails', completed: true },
      ]
    }
  }

  render() {
    return (
      <div>
        <div>
          <img src="https://yt3.ggpht.com/a-/AN66SAzMIYayieByccBHaOSxi-Tl5zluCmvk7sivKQ=s900-mo-c-c0xffffffff-rj-k-no" style={{width:'200px'}}/>
        </div>
        <ul>
          {
            this.state.todos.map(todo => 
              <li 
                style={todo.completed ? { textDecoration: 'line-through' } : null } >
                {todo.description}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
