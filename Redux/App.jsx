import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask, removeTask, selectTasks } from './redux/tasksSlice';

const TaskList = () => {
  const tasks = selectTasks();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{' '}
            <button onClick={() => dispatch(removeTask(task.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = React.useState('');

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
    };
    dispatch(addTask(newTask));
    setTaskTitle('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TaskList} />
        <Route path="/add" component={TaskForm} />
      </Switch>
    </Router>
  );
};

export default App;
