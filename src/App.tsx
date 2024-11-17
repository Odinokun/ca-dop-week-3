import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  let [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Rest API', isDone: false },
    { id: v1(), title: 'GraphQL', isDone: false },
  ]);

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(t => t.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let task = { id: v1(), title: title, isDone: false };
    let newTasks = [task, ...tasks];
    setTasks(newTasks);
  }

  let [filter, setFilter] = useState<FilterValuesType>('all');

  let tasksForTodolist = tasks;

  if (filter === 'active') {
    tasksForTodolist = tasks.filter(t => t.isDone === false);
  }
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter(t => t.isDone === true);
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  return (
    <div className='App'>
      <Todolist
        title='What to learn'
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      >
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            delectus iusto accusamus eligendi voluptatum quam amet! Nobis
            incidunt atque quidem. Est veniam repellat iste consectetur ad
            deleniti distinctio itaque ex molestias placeat magni repudiandae,
            ut explicabo sapiente unde voluptas nobis. Voluptatum, animi modi
            quasi qui eveniet natus nisi mollitia nulla!
          </div>
        </div>
      </Todolist>

      <Todolist
        title='What to learn'
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      >
        <div>
          <div>A lot of boring information</div>
          <div>A lot of boring information</div>
          <div>A lot of boring information</div>
          <br />
          <input placeholder={'A lot of boring information'} />
          <br />
          <br />
          <div>
            <button>Boring Button 1</button>
            <button>Boring Button 2</button>
            <button>Boring Button 3</button>
          </div>
        </div>
      </Todolist>

      <Todolist
        title='What to learn'
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
