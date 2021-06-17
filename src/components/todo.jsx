import React from 'react'
const Todo = ({ task, todo, setTodos, todos}) => {
	let deleteTask = () => {
		setTodos(todos.filter((e) => e.id !== todo.id	))
	}
	return(
		<div>
			<li>{task} </li>
			<button onClick={deleteTask} >Done</button>
		</div>
		)
}
export default Todo; 
