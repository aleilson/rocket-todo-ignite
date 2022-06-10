import { Trash } from 'phosphor-react';
import { Task } from '../App';
import { TaskNotFound } from './TaskNotFound';
import styles from './Tasks.module.css';

interface TasksProps {
  tasks: Task[];
  onChecked(id: number): void;
  totalTasksFinished: number;
  onDelete(id: number): void;
}

export function Tasks({ tasks, onChecked, onDelete, totalTasksFinished }: TasksProps) {

  return (
    <div className={styles.tasks}>
      <div className={styles.headerTasks}>
        <strong>
          Tarefas criadas
          <span>{tasks.length}</span>
        </strong>

        <strong>
          Concluídas
          <span>{totalTasksFinished} de {tasks.length}</span>
        </strong>
      </div>

      <div className={styles.tasksContent}>
        {!!tasks.length ? (
          <>
            {tasks.map(task => {
              return (
                <div className={styles.task} key={task.id}>
                  <input type="checkbox" checked={task.isChecked} onChange={() => onChecked(task.id)} />
                  <span className={task.isChecked ? styles.finished : ''}>{task.description}</span>
                  <button onClick={() => onDelete(task.id)}>
                    <Trash />
                  </button>
                </div>
              )
            })}
          </>
        ) : (
          <TaskNotFound />
        )}
      </div>
    </div>
  )
}