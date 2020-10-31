import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todos: [...state.todos, { content: action.content, id: action.id }]
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        todos: [...state.todos.filter(todo=>{
          return todo.id!==action.id
        })]
      };
    default:
      return state
  }
}

const initialTodos = [
  { id: 1, content: 'to feed a cat' },
  { id: 2, content: 'buy milk' }
];

const App = () => {
  const [todosData, dispatchTodos] = useReducer(todosReducer, {
    todos: initialTodos,
    isTrue: true
  });
  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const addTodo = () => {
    dispatchTodos({
      type: 'ADD_ITEM',
      content,
      id: uuidv4()

    });
    setContent('')
  }

  const deleteTodo = (id) => {
    dispatchTodos({
      type: 'DELETE_ITEM',
      id
    });
    setContent('')
  }

  return (
    <div className="todo-App container">
      <h1 className='center green-text'>Todos now</h1>
      <Todos todos={todosData.todos} deleteTodo={deleteTodo} />
      <AddTodo content={content} addTodo={addTodo} onChange={handleChange} />
    </div>
  );
}


export default App;




