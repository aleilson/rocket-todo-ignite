import styles from './Header.module.css';
import { NewTask } from './NewTask';

import rocketTodoLogo from '../assets/rocket.svg';

interface HeaderProps {
    createTask: (task: string) => void;
}

export function Header({ createTask }: HeaderProps) {
    return (
        <header className={styles.header}>
            <img src={rocketTodoLogo} alt="Rocket Todo" />
            <span>
                to
                <p>
                    do
                </p>
            </span>

            <div className={styles.addTask}>
                <NewTask  createNewTask={createTask} />
            </div>
        </header>
    )
}