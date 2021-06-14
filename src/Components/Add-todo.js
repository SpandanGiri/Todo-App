import React, { useState } from 'react';
import styles from './Add-todo.css';

export const Addtodo = ({addTodo}) => {
    let Addtodo = {
        top: "10vh",
        width: "40%",
    }

        const [title,setTitle]=useState("");
        const [desc,setDesc]=useState("");

        const submit=(e)=>{
            e.preventDefault();
            if(!title || !desc ){
                alert('Title and Desc required');
            }
            else{
                addTodo(title,desc);
            }
        }

    return (
        <div className="mb-3">
            <form action="submit" className="" onSubmit={submit}>
                <div className="row1">
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="  d-flex p-2 my-2" id="inputTitle1" placeholder="Title" style={Addtodo} />
                </div>
                <div className="row2">
                    <input type="text" value={desc}  onChange={(e)=>{setDesc(e.target.value)}} className="  d-flex p-2 my-2 " id="inputTitle2" placeholder="Description" style={Addtodo} />
                </div>
                <div className="row3">
                    <button type="submit" className="btn btn-sm  btn-success" id="submit_btn">Submit</button>
                </div>

            </form>
        </div>
    )
}
