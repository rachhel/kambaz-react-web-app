import { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h2>Working with Arrays</h2>

      {/* Retrieve all todos */}
      <h3>Retrieving Arrays</h3>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      {/* Retrieve a todo by ID */}
      <h3>Retrieving an Item from an Array by ID</h3>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <FormControl
        id="wd-todo-id"
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* Filter completed todos */}
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      {/* Create a new todo */}
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-create-todo"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />

      {/* Delete a todo */}
      <h3>Deleting from an Array</h3>
      <a
        id="wd-delete-todo"
        className="btn btn-danger float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />

      {/* Update title */}
      <h3>Updating an Item in an Array</h3>
      <a
        id="wd-update-todo-title"
        className="btn btn-primary float-end me-2"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        defaultValue={todo.title}
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br /><br /><hr />

      {/* ✅ Update description */}
      <a
        id="wd-update-todo-description"
        className="btn btn-success float-end me-2"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>
      <FormControl
        placeholder="New description"
        defaultValue={todo.description}
        className="w-75 mb-3"
        onChange={(e) =>
          setTodo({ ...todo, description: e.target.value })
        }
      />
      <br /><br /><hr />

      {/* ✅ Update completed */}
      <a
        id="wd-update-todo-completed"
        className="btn btn-warning float-end me-2"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>
      <FormCheck
        type="checkbox"
        label="Completed"
        id="wd-update-completed-checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <hr />
    </div>
  );
}
