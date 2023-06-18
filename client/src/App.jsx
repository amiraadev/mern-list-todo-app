
import React, { useEffect, useState } from 'react';

// const API_BASE = "http://localhost:3001";
const API_BASE = process.env.REACT_APP_API_BASE;

function App() {

  const [todos ,setTodos] =useState([]);
  const [popUpActive ,setpopUpActive] =useState(false);
  const [newTodo ,setnewTodo] =useState("");

useEffect(() => {
   GetTodos();
   console.log(todos);
},[])

const GetTodos = () => {
  fetch(API_BASE+"/todos")
           .then(res => res.json())
           .then(data => setTodos(data))
           .catch(err => console.error("Error :",err));
}
const completeTodo = async (id) => {
  try {
    const response = await fetch(API_BASE + "/todo/complete/" + id, {
      method: 'PUT'
    });

    if (response.ok) {
      const data = await response.json();
      setTodos(todos =>
        todos.map(todo => {
          if (todo._id === data._id) {
            todo.complete = data.complete;
          }
          return todo;
        })
      );
    } else {
      throw new Error('Request failed with status' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await fetch(API_BASE + "/todo/delete/" + id, {
      method: 'DELETE'
    });

    if (response.ok) {
      const data = await response.json();
      setTodos(todos =>
        todos.filter(todo => todo._id !== data._id)
      );
    } else {
      throw new Error('Request failed with status' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const addTodo = async () => {
  try {
    const response = await fetch(API_BASE + "/todo/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text:newTodo}),
    });

    if (response.ok) {
      const data = await response.json();
      setTodos(todos => [...todos, data]);
      setnewTodo("");
    } else {
      throw new Error('Request failed with status' + response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <div className="App">
        <h1>welcome, Amira</h1>
        <h4>Your Tasks</h4>

        <div className="todos">

        { todos.map((todo, index) => (
          // <div className="todo is-complete" key={index}>
          <div className={"todo " + (todo.complete ? "is-complete" : "")} key={todo._id}>
            <div className="checkbox"  onClick={() => completeTodo(todo._id)}></div>
            <div className="text">{todo.text}</div>
            <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
          </div>
        ))}
        </div> 

        <div className="addPopup" onClick={() => setpopUpActive(true)}>+</div>
        {
          popUpActive ? (

            <div className="popup">   
                <div className="closePopup" onClick={() => setpopUpActive(false)}>x</div>
                <div className="content">
                  <h3>Add Task</h3>
                  <input 
                      type="text"
                      className="add-todo-input" 
                      value={newTodo}
                      onChange={e => setnewTodo(e.target.value)}/>
                      <div className="button" onClick={() => addTodo()}>Create Task</div>
                </div>
            </div>

          ) : ''
        }
     </div>
  );
}

export default App;
