import apiFacade from "../api/apiFacade";
import React, { useState, useEffect } from "react";
import {Button} from "reactstrap"

export default function SecurePage() {
  const [todoFromServer, setTodoFromServer] = useState([]);

  const init = { todoText: ""};
  const [newTodo, setNewTodo] = useState(init);

  const createTodo = (evt) => {
    evt.preventDefault();
    apiFacade.addTodo(newTodo.todoText);
    setNewTodo("")
  };

  const onChange = (evt) => {
    setNewTodo({
      ...newTodo,
      [evt.target.id]: evt.target.value,
    });
  };

  useEffect(() => {
    apiFacade.getTodo().then((data) => setTodoFromServer(data));
  }, [createTodo]); 
  
  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center">
        <h3 className="mt-5">Todos</h3>
          <form onChange={onChange}>
              <input type="text" id="todoText" placeholder="Enter Todo"/>
          </form>
          <Button className="mb-5 mt-3" onClick={createTodo}>Add</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center">
          <div>
              {todoFromServer.map((todo) => (
                <li key={todo.todoText}>{todo.todoText}</li>
              ))}
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}



