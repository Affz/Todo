import React from 'react';
import { render } from 'react-dom';
import Title from './todo_title';
import TodoForm from './todo_form';
import TodoNew from './todo_new';
import TodoList from './todo_list';
import Modal from 'react-modal';

window.id = 0;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(55%, 75%)',
    border:'groove'

  }
};
Modal.setAppElement(document.getElementById('app'))
class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      ModalIsOpen:false,
      id:1,
      selectedtodo:{text:''}
    }
    this.openModal=this.openModal.bind(this);
    this.onButtonClick=this.onButtonClick.bind(this);
    this.afterOpenModal=this.afterOpenModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.addTodo=this.addTodo.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
    this.savetodo=this.savetodo.bind(this);

  }
  openModal(todo){
    console.log('todo',todo)
    this.setState({ModalIsOpen:true,selectedtodo:todo});

  }
  afterOpenModal() {

}

closeModal() {
  this.setState({ModalIsOpen: false});
}
onButtonClick()
   {
    this.openModal();
   }

  addTodo(val){

    const todo = {text: val,id:this.state.id}


          this.state.data.push(todo);
          this.setState({data: this.state.data, id:this.state.id+1});

  }

  handleRemove(id){

    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    this.setState({data: remainder});
  }
  savetodo(){
    const id=this.state.selectedtodo.id
    const remainder = this.state.data.filter((todo) => {
      if(todo.id === id) {
        todo.text=this.state.selectedtodo.text
      }
        return todo;
    });
      this.setState({data: remainder});
  }

  render(){
    var actualheight=screen.height
    return (
      <div id="unknown">

      <Modal
          isOpen={this.state.ModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="modal_div"
        >
          <h1 className="headtodo">Edit Todoitem</h1>

          <input type="text"  value={this.state.selectedtodo.text}
            onChange={(e)=>{this.setState({selectedtodo:{text:e.target.value,id:this.state.selectedtodo.id}})}}
            className="modalinput"/>

          <div>
            <button type="button" className="btn btn-primary" id="save" onClick={this.savetodo}>SaveItem</button>

          </div>
          <i className="material-icons" id="close" onClick={this.closeModal}>close</i>

        </Modal>

        <div className="nested" style={{height:actualheight}}>

        <Title/>

        <TodoForm addTodo={this.addTodo.bind(this)}/>

        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
          openmod={this.openModal}
        />

        </div>
      </div>
    );
  }
}
export default TodoApp;
