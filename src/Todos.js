import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div onClick={() => { deleteTodo(todo.id) }} className='collection-item' key={todo.id}>
                    <span >{todo.content}</span>
                </div>)
        })
    ) : (
            <h1 className='center'>you can relax today!</h1>
        )

    return (
        <div className='collection'>
            {todoList}
        </div>
    )
}

export default Todos

