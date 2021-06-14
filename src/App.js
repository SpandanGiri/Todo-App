
import './App.css';
import Header from  './Components/Header';
import Footer from './Components/Footer';
import {Todos} from './Components/Todos';
import {TodoItem} from './Components/Todo_Item';
import {Addtodo} from './Components/Add-todo';
import React, { useState } from 'react';


function App() {

const onDelete=(todo)=>{
  console.log('Deleted',todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}

const addTodo=(title,desc)=>{
  
  let myTodo={
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);
  console.log('Added',myTodo);
}


const [todos, setTodos] = useState([]);

  
  return (
    <>
      <Header title='Todo-List' icon={true} />  
      <Addtodo addTodo={addTodo} />  
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/> 
    </>
  );
}

export default App;
