import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div>
           <h4>{todo.title}</h4>
           <h6>{todo.desc}</h6> 

           <button type="button" class="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
