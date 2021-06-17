import React, { useState } from 'react';
import Input from './components/input';
import TodoList from './components/todoList'
function App() {
    const [inputTask, setInputTask] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <Input inputTask={inputTask} setInputTask={setInputTask} todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
        );
}

export default App;
