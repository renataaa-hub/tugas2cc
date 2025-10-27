import React, { useState } from 'react';

const h = React.createElement;

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault(); 
    if (input.trim() === '') return; 
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput(''); }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return h('div', { className: 'app-container' },
    h('h1', null, 'My To-Do List'),
    
    h('form', { onSubmit: addTodo, className: 'todo-form' },
      h('input', {
        type: 'text',
        value: input,
        onChange: (e) => setInput(e.target.value),
        placeholder: 'Tambahkan tugas baru...'
      }),
      h('button', { type: 'submit' }, 'Tambah')
    ),

    h('ul', { className: 'todo-list' },
      todos.map(todo => 
        h('li', { key: todo.id, className: 'todo-item' },
          h('span', null, todo.text),
          h('button', { onClick: () => removeTodo(todo.id) }, 'Hapus')
        )
      )
    )
  );
}

export default App;