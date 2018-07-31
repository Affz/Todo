import React,{Component} from 'react';
const TodoNew = ({todo, remove,openmodnew}) => {

  return (

    <div style={{width:600}} id="maindiv">
    <div style={{width:400, float:'left'}}>
      <a  href="#"  className="list-group-item" >{todo.text}</a>
    </div>
      <i class="material-icons" id="clear" onClick={() => {remove(todo.id)}}>clear</i>
      <i class="material-icons" id="clear" onClick={()=>{openmodnew(todo)}}>edit</i>
    </div>
  );
}
export default TodoNew;
