import React, {Component} from 'React';
import TodoNew from './todo_new';

const TodoList = ({todos, remove,openmod}) => {
  const todoNode = todos.map((todo) => {
    return (<TodoNew  openmodnew ={openmod} todo={todo} key={todo.id} remove={remove}/>)
  });
  return (
    <div className="list-group" style={{marginTop:50}}>{todoNode}</div>
  );
}
export default TodoList;
