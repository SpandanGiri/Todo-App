import React from 'react'
import { TodoItem } from './Todo_Item'

export const Todos = (props) => {
    return (
        <div className='container text-center my-3'>
            <h3>Todo-app</h3>

            {props.todos.length == 0 ? "No todos to display" :
                
                    props.todos.map((todo) => {
                        return (
                            <div className='list my-4'>
                                <TodoItem todo={todo} key={todo.sl} onDelete={props.onDelete} />
                            </div>

                        )

                    })
                }



        </div>
    )
}
