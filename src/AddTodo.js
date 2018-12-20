import React, { Component } from 'react'
import shortId from 'shortid'


class AddTodo extends Component {
  constructor(props){
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [ event.target.name ]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    const todo = {
      id: shortId.generate(),
      description: this.state.newTodo,
      completed: false
    }

    this.props.addTodo(todo)

    this.setState({
      newTodo: ''
    })
    
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="newTodo" value={this.state.newTodo} onChange={this.handleChange}/>
        <input type="submit" value="Add todo" />
      </form>
    )
  }
}

export default AddTodo