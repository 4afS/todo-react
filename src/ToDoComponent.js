import React from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

export default class ToDoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      title: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const len = this.state.list.length;
    const id = len === 0 ? 1 : this.state.list[len - 1].id + 1;

    this.setState({
      list: [
        ...this.state.list,
        new todo(
          id,
          this.state.title
        )
      ],
      title: ""
    });
  }

  handleChange = (e) =>
    this.setState({
      title: e.target.value
    });

  deleteTodo = (id) =>
    this.setState({
      list: this.state.list.filter(todo => todo.id !== id)
    });

  render() {
    return (
      <div>
        <ToDoForm
          title={this.state.title}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ToDoList
          list={this.state.list}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}