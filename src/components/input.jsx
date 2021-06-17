import React from 'react';
const Input = ({inputTask, setInputTask, todos, setTodos}) => {
	let inputTextHandler = (e) => {
		setInputTask(e.target.value)
	}
	let todoAdder = () => {
		setTodos([...todos,{task: inputTask, id: Math.random()}])
		setInputTask('');
	}
	return(
		<div>
			<input value={inputTask} type="text" placeholder='Enter your task here' onChange={inputTextHandler}/>
			<button disabled={inputTask === ''} onClick={todoAdder}>Add Task</button>
		</div>
		)
}
export default Input;