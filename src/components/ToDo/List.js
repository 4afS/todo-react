import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

export default function ToDoList(props) {
  return (
    <List>
      {
        props.list.map((item, i) => (
          <ListItem
            key={i}
          >
            <ListItemText
              primary={item.title}
              secondary={item.id}
            />
            <Button
              onClick={() => props.deleteTodo(item.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))
      }
    </List>
  );
}