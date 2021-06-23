import React from 'react';
import Todo from './todo'
const TodoList = ({todos, setTodos}) =>{
	return(
		<div>
			<ol>
				{todos.map((todo) => (
					<Todo todo={todo} task={todo.task} key={todo.id} setTodos={setTodos} todos={todos} />)
				)}
			</ol>
		</div>
		)
}
export default TodoList; 
