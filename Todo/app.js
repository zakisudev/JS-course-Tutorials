//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

///Event Listener
window.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterTodo.addEventListener('click', filteRTodo);

//Functions
function addTodo(e) {
  //Prevent form from submitting
  e.preventDefault();
  // To do DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create LI
  const newTodo = document.createElement('li');
  if (todoInput.value === '') {
    return;
  }
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Add todo list to localstorage
  saveLocal(todoInput.value);
  //Completed button
  const completeButton = document.createElement('button');
  completeButton.innerHTML =
    '<i class="fa fa-check fa-lg" style="color: #313131;"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  //Edit Button
  const editButton = document.createElement('button');
  editButton.innerHTML =
    '<i class="fa-solid fa-edit" style="color: #313131"></i>';
  editButton.classList.add('edit-btn');
  todoDiv.appendChild(editButton);
  //Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML =
    '<i class="fa-solid fa-trash" style="color: #313131"></i>';
  deleteButton.classList.add('trash-btn');
  todoDiv.appendChild(deleteButton);
  //Append to list
  todoList.appendChild(todoDiv);
  //Clear input
  todoInput.value = '';
}

function deleteCheck(e) {
  e.stopPropagation();
  const item = e.target;
  // Edit todo
  if (item.classList[0] === 'edit-btn') {
    const todo = item.parentElement;
    // toggle the 'editing' class
    todo.classList.toggle('editing');
    // if the todo is in editing mode, change the text to an input field
    if (todo.classList.contains('editing')) {
      const input = document.createElement('input');
      input.classList.add('todo-item');
      input.type = 'text';
      input.value = todo.children[0].innerText; // set the current value
      todo.children[0].replaceWith(input);
    } else {
      // if the todo is not in editing mode, change the input field back to text
      const li = document.createElement('li');
      li.innerText = todo.children[0].value; // set the new value
      li.classList.add('todo-item');
      todo.children[0].replaceWith(li);
    }
  }

  //Delete todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add('fade');
    removeLocalTodos(todo),
      todo.addEventListener('transitionend', function () {
        todo.remove();
      });
  }

  //Complete todo
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('checked');
  }
}

function filteRTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('checked')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('checked')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

function saveLocal(todo) {
  //Check for availability
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  //Check for availability
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    // To do DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Completed button
    const completeButton = document.createElement('button');
    completeButton.innerHTML =
      '<i class="fa fa-check fa-lg" style="color: #313131;"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML =
      '<i class="fa-solid fa-trash-can" style="color: #313131;"></i>';
    deleteButton.classList.add('trash-btn');
    todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
