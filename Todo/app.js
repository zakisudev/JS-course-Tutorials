//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.filter-todo');

///Event Listener
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
  if(todoInput.value === '')
  {
    return;
  }
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  todoInput.value = '';
  //Completed button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fa fa-check fa-lg" style="color: #313131;"></i>'
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  //Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can" style="color: #313131;"></i>';
  deleteButton.classList.add('trash-btn');
  todoDiv.appendChild(deleteButton);
  //Append to list
  todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
  const item = e.target;
  //Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add('fade');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    })
  }
  //Complete todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle('checked');
  }
}

function filteRTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('checked')) {
          todo.style.display = 'flex';
        }else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if(!todo.classList.contains('checked')) {
          todo.style.display = 'flex';
        }else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}