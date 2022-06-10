import { useMemo, useState } from 'react';
import './global.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

const tasksDefault = [
  {
    id: 1,
    isChecked: false,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est aliquam deleniti ullam nostrum soluta sapiente consectetur.'
  },
  {
    id: 2,
    isChecked: false,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est aliquam deleniti ullam nostrum soluta sapiente consectetur.'
  },
  {
    id: 3,
    isChecked: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est aliquam deleniti ullam nostrum soluta sapiente consectetur.'
  }
];

export interface Task {
  id: number;
  isChecked: boolean;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksDefault);

  function createNewTask(descriptionToInsert: string) {
    setTasks([...tasks, 
      {
        id: Math.random() * 1000,
        description: descriptionToInsert,
        isChecked: false
      }
    ]);
  }

  console.log(tasks)

  const totalTasksFinished = useMemo(() => {
    return tasks.reduce((totalTasks, task) => task.isChecked ? totalTasks + 1 : totalTasks, 0);
  }, [tasks]);

  function handleFinishedTask(id: number) {
    const taskChecked = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }

      return task;
    });

    setTasks(taskChecked);
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <Header createTask={createNewTask} />

      <main>
        <Tasks
          tasks={tasks}
          onChecked={handleFinishedTask}
          totalTasksFinished={totalTasksFinished}
          onDelete={handleDeleteTask}
        />
      </main>
    </div>
  )
}

export default App
