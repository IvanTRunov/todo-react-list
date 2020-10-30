import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    return(
        <ul>
        {todos.map(todo=>{
          return (<li key={todo.id} onClick={()=>deleteTodo(todo.id)} >{todo.content}</li>)
        })}
      </ul>
    )
}

export default Todos

