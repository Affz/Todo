import React,{Component} from 'React';
import ToDoList from './todo_list';
import TodoApp from './index';

class ToDo extends Component{
	constructor(props){
		super(props)
		this.state={
			input:''
		}
	}

	render(){

		return(
			<div className="maindiv">
				<TodoApp/>

			</div>


		);
	}
}
export default ToDo;
