import React,{Component} from 'react';

const TodoForm = ({addTodo}) => {
  let input;
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }} id="myform">

      <input className="form-control col-md-12" style={{marginTop:20, width:440,height:50}}
      placeholder="Enter ToDo Item"
      ref={node => {
      input = node;
      }} />
    <button type="submit" id="btnadd">
      <i class="material-icons" id="add" type="submit">add</i>
    </button>
    </form>
  );
};
export default TodoForm;
