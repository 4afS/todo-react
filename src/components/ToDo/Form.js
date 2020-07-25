import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ToDoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextField 
        value={props.title}
        onChange={props.handleChange}
      />
      <Button
        type="submit"
        color="primary"
      >
        Add
      </Button>
    </form>

  )
}