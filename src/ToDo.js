import React from 'react';
import ToDoList from './ToDoList';

export default class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      todo: ""
    };
  }

  append_todo = (todo) => this.setState({
    list: [...this.state.list, this.state.todo],
    todo: ""
  });
  change_todo = (e) => {
    const todo = e.target.value;
    this.setState({ todo: todo });
  }

  render() {
    return (
      <div>
        <input value={this.state.todo} onChange={this.change_todo.bind(this)} />
        <button onClick={() => this.append_todo(this.state.todo)}>Add</button>
        <ToDoList list={this.state.list} />
      </div>
    )
  }
}