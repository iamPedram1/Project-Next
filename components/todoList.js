import React from "react";

function TodoList({ todos }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <Link href={`/${todo.id}`}>
                  <span>{todo.title}</span>
                </Link>
              </div>
              <div className="col">
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger rounded-pill mx-5"
                >
                  Delete
                </button>
              </div>
              <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                  <label className="form-check-label mx-2">Finished:</label>
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked={todo.completed}
                  />
                </div>
              </div>
            </div>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default TodoList;
