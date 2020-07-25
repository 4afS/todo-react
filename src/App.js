import React from 'react';
import ToDo from './ToDo';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDo />
      </div>
    )
  };
}