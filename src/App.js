import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

const App = () => {
  const [todosData, setTodo] = useState({
    todos:initialTodos, 
    isTrue:true
  });
  const [content, setContent] = useState('')
  
  const handleChange =(e)=>{
    setContent(e.target.value)
  }
  const addTodo = () =>{
    const newTodoList = [...todosData.todos,{id: uuidv4(),content}];
    setTodo({...todosData, todos: newTodoList});
    setContent('')
  }
  const deleteTodo=(id)=>{
    const newTodoList = todosData.todos.filter(todo=>{
      return todo.id !== id
    });
    setTodo({...todosData,todos: newTodoList});
  }
   
  return (
    <div className="todo-App container">
      <h1 className='center green-text'>Todos now</h1>
      {todosData.isTrue && <Todos todos={todosData.todos} deleteTodo={deleteTodo} />}
      <AddTodo content={content} addTodo={addTodo} onChange={handleChange}/>
    </div>
  );
}

const initialTodos = [
  { id: 1, content: 'to feed a cat' },
  { id: 2, content: 'buy milk' }
];

export default App;




