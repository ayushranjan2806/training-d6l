import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Project' }
  ]);
  const [editTodoId, setEditTodoId] = useState(null); // State to track which todo item is being edited
  const [editText, setEditText] = useState('');
  const [buttonText, setButtonText] = useState('Add Todo'); // Button text state

  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setEditTodoId(null); // Clear edit mode after updating
    setButtonText('Add Todo'); // Reset button text to "Add Todo"
  };

  const handleEdit = (id, text) => {
    setEditTodoId(id);
    setEditText(text);
    setButtonText('Update Todo'); // Change button text to "Update Todo" when in edit mode
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editText.trim()) return;
    if (editTodoId !== null) {
      updateTodo(editTodoId, editText); // Update existing todo if in edit mode
    } else {
      addTodo(editText); // Add new todo if not in edit mode
    }
    setEditText('');
  };

  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? ( // If the todo is in edit mode, render input field
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleSubmit} // Update todo on blur
                autoFocus // Focus on input field when in edit mode
              />
            ) : (
              // Otherwise, render todo text
              <React.Fragment>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo.id, todo.text)}>
                  Edit
                </button>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Add Todo"
        />
        <button type='submit'>{buttonText}</button> {/* Use buttonText state for button text */}
      </form>
    </div>
  );
};

export default TodoList;
