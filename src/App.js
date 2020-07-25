import React from 'react';
import ToDoComponent from './components/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDoComponent />
      </div>
    )
  };
}