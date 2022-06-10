import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';


interface NewTaskProps {
    createNewTask: (description: string) => void;
}

export function NewTask({ createNewTask }: NewTaskProps) {
    const [newDescription, setNewDescription] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        createNewTask(newDescription);

        setNewDescription('');
    }
    
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewDescription(event.target.value)
    }

    const isNewTaskFieldEmpty = newDescription.trim().length === 0;

    return (
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newDescription}
                onChange={handleNewTaskChange}
            />

            <button 
                type='submit' 
                className={styles.taskFormButton}
                disabled={isNewTaskFieldEmpty}
            >
                Criar
                <PlusCircle />
            </button>
        </form>
    )
}