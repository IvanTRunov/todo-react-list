import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './AddTodo';
import Todos from './Todos';


const initialTodos = [
    { id: 1, content: 'to feed a cat' },
    { id: 2, content: 'buy milk' }
  ];
const App = () => {
  const [todos, setTodo] = useState(initialTodos);
  const [content, setContent] = useState('')
  
  const handleChange =(e)=>{
    setContent(e.target.value)
  }
  const addTodo = () =>{
    const newTodoList = [...todos,{id: uuidv4(),content}];
    setTodo(newTodoList);
    setContent('')
  }
  const deleteTodo=(id)=>{
    const newTodoList = todos.filter(todo=>{
      return todo.id !== id
    });
    setTodo(newTodoList);
  }
   
  return (
    <div className="todo-App container">
      <h1 className='center green-text'>Todos now</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo content={content} addTodo={addTodo} onChange={handleChange}/>
    </div>
  );
}


export default App;




