import React from 'react'

const AddTodo = ({ content, addTodo, onChange }) => {
  return (
    <div>
      <input type='text' value={content} onChange={onChange} />
      <button type='button' onClick={addTodo} >add</button>
    </div>
  )
}

export default AddTodo

